//
// content.js
//

'use strict';

const $ = document.querySelector.bind(document);

// 「さらに読み込む」で追加される要素を処理するオブザーバー
const timelineObserver = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        if (mutation.addedNodes.length === 0) continue;

        const node = mutation.addedNodes[0];
        const item = isNewMyPage ? node.childNodes[0] : node;
        if (!item || item.className !== (isNewMyPage ? 'NicorepoItem-item' : 'NicorepoTimelineItem log')) continue;
        Timeline.push(new TimelineItem(item));
    }
});

// nicorepo-page の変更を検知するオブザーバー
const nicorepoPageObserver = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        if (mutation.addedNodes.length === 0) continue;

        const target = $('.NicorepoTimeline');
        if (!target) continue;

        Timeline.clear();

        for (const node of target.childNodes) {
            const item = isNewMyPage ? node.childNodes[0] : node;
            if (!item || item.className !== (isNewMyPage ? 'NicorepoItem-item' : 'NicorepoTimelineItem log')) continue;
            Timeline.push(new TimelineItem(item));
        }

        timelineObserver.disconnect();
        timelineObserver.observe(target, { childList: true });

        // LazyLoad を発火させるワークアラウンド
        window.scrollBy(0, 1);
        window.scrollBy(0, -1);

        return;
    }
});

// nicorepo-page にオブザーバーを追加するオブザーバー
const nicorepoAppObserver = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        if (mutation.addedNodes.length === 0) continue;

        const target = $('.nicorepo-page');
        if (!target) continue;

        nicorepoPageObserver.observe(target, { childList: true });

        // 自身を破棄
        nicorepoAppObserver.disconnect();

        return;
    }
});

let isNewMyPage;

document.addEventListener('DOMContentLoaded', () => {
    isNewMyPage = !!$('.UserPage-main');
    const target = $(isNewMyPage ? '.UserPage-main' : '.nicorepo-page');
    if (target) {
        nicorepoPageObserver.observe(target, { childList: true, subtree: true });
    } else {
        // nicorepo-page がなければオブザーバーをひとつかます
        const app = $('#MyPageNicorepoApp') || $('#UserPageNicorepoApp');
        if (!app) return;
        nicorepoAppObserver.observe(app, { childList: true });
    }
});

// Get stored data
chrome.storage.sync.get(null, data =>
    data.rules && Timeline.update(data.rules)
);
chrome.storage.onChanged.addListener(data =>
    data.rules && Timeline.update(data.rules.newValue)
);

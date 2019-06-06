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
        Timeline.push(new TimelineItem(node));
    }
});

// nicorepo-page の変更を検知するオブザーバー
const nicorepoPageObserver = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        if (mutation.addedNodes.length === 0) continue;

        const target = mutation.addedNodes[0];
        if (target.className !== 'NicorepoTimeline timeline') continue;

        Timeline.clear();

        for (const node of target.childNodes) {
            if (node.className !== 'NicorepoTimelineItem log') continue;
            Timeline.push(new TimelineItem(node));
        }

        timelineObserver.disconnect();
        timelineObserver.observe(target, { childList: true });

        // LazyLoad を発火させるワークアラウンド
        window.scroll(0, 1);
        window.scroll(0, 0);

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

document.addEventListener('DOMContentLoaded', () => {
    const target = $('.nicorepo-page');
    if (target) {
        nicorepoPageObserver.observe(target, { childList: true });
    } else {
        // nicorepo-page がなければオブザーバーをひとつかます
        const app = $('#MyPageNicorepoApp') || $('#UserPageNicorepoApp');
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

chrome.runtime.sendMessage('show_page_action');

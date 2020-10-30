//
// content.js
//

'use strict';

const $ = document.querySelector.bind(document);

// 「さらに表示する」で追加される要素を処理するオブザーバー
const timelineObserver = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        if (mutation.addedNodes.length === 0) continue;

        const item = mutation.addedNodes[0].children[0];
        if (item && item.matches('.NicorepoItem-item')) {
            Timeline.push(new TimelineItem(item));
        }
    }
});

// UserPage-main の変更を検知するオブザーバー
const userPageObserver = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        if (mutation.addedNodes.length === 0) continue;

        const target = $('.NicorepoTimeline');
        if (!target) continue;

        Timeline.clear();

        for (const node of target.children) {
            const item = node.children[0];
            if (item && item.matches('.NicorepoItem-item')) {
                Timeline.push(new TimelineItem(item));
            }
        }

        timelineObserver.disconnect();
        timelineObserver.observe(target, { childList: true });

        break;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const target = $('.UserPage-main');
    if (target) {
        userPageObserver.observe(target, { childList: true, subtree: true });
    }
});

// Get stored data
chrome.storage.sync.get(null, data =>
    data.rules && Timeline.update(data.rules)
);
chrome.storage.onChanged.addListener(data =>
    data.rules && Timeline.update(data.rules.newValue)
);

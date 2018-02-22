//
// content.js
//

'use strict';

const observer = new MutationObserver(mutations => {
    mutations.filter(mutation =>
        mutation.addedNodes.length
    ).map(mutation => {
        // Handle the added nicorepo
        const node = mutation.addedNodes[0];
        Timeline.push(new TimelineItem(node));
    });
});

const initializer = new MutationObserver(mutations => {
    mutations.filter(mutation =>
        mutation.addedNodes.length
    ).filter(mutation =>
        mutation.addedNodes[0].className === 'NicorepoTimeline timeline'
    ).map(mutation => {
        const target = mutation.addedNodes[0];

        // Handle the initial nicorepo
        Array.from(target.childNodes).map(node => {
            if (node.className !== 'NicorepoTimelineItem log') return;
            Timeline.push(new TimelineItem(node));
        });

        // Observe the page load more nicorepo
        observer.observe(target, { childList: true });
        initializer.disconnect();

        // Force to fire LazyLoad
        window.scroll(0, 1);
        window.scroll(0, 0);
    });
});

// Get stored data
chrome.storage.sync.get(null, data =>
    data.rules && Timeline.actionAll(data.rules)
);
chrome.storage.onChanged.addListener(data =>
    data.rules && Timeline.actionAll(data.rules.newValue)
);

chrome.runtime.sendMessage('show_page_action');

// Call the initializer
document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('MyPageNicorepoApp');
    initializer.observe(target, { childList: true, subtree: true });
});

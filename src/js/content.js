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
    });
});

// TODO: Sample Code
chrome.storage.sync.set({
    rules: [
        { type: 'nicovideo.user.video.kiriban.play', action: 'mute' },
        { type: 'live.channel.program.reserve', action: 'mute' },
        { type: 'nicovideo.user.video.upload', action: 'highlight' },
    ]
});

// Get stored data
chrome.storage.sync.get(null, data =>
    data.rules && Timeline.addRules(data.rules)
);
chrome.storage.onChanged.addListener(data =>
    data.rules && Timeline.addRules(data.rules.newValue)
);

// Call the initializer
document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementsByClassName('nicorepo-page')[0];
    initializer.observe(target, { childList: true });
});

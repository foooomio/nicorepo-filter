//
// background.js
//

'use strict';

chrome.runtime.onInstalled.addListener(() => {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message === 'show_page_action') {
            chrome.pageAction.show(sender.tab.id);
        }
    });
});

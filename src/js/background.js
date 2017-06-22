//
// background.js
//

'use strict';

chrome.runtime.onInstalled.addListener(() =>
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () =>
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        urlContains: 'www.nicovideo.jp/my/top'
                    }
                }),
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        urlContains: 'www.nicovideo.jp/user'
                    }
                })
            ],
            actions: [ new chrome.declarativeContent.ShowPageAction() ]
        }])
    )
);

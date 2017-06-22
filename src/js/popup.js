//
// popup.js
//

'use strict';

// TODO: Sample Code
chrome.storage.sync.get(null, data => {
    data.rules.push({type: 'nicovideo.user.temporary_mylist.add.video', action: 'highlight'});
    console.log(data);
    chrome.storage.sync.set(data);
});

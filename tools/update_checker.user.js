// ==UserScript==
// @name         Nicorepo ja-jp.js Update Checker
// @namespace    https://foooomio.net/
// @version      0.1
// @author       foooomio
// @license      MIT License
// @match        https://www.nicovideo.jp/my/top
// @run-at       document-idle
// @grant        none
// ==/UserScript==

{
    'use strict';

    const [match, version, ...rest] = /ja-jp.js\?(\d{8})/.exec(document.body.innerHTML);

    if (version !== '20180714') {
        alert(`ja-jp.js が更新されています。( ${match} )`);
    }
}

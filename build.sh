#!/bin/sh

mkdir -p dist
rm dist/*.zip

# for Chrome
zip -r dist/chrome.zip src -x *.DS_Store

# for Firefox
cd src
zip -r ../dist/firefox.zip * -x *.DS_Store

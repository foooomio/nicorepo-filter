#!/bin/bash

set -eux

NAME="nicorepo-filter"
VERSION=$(jq -r .version src/manifest.json)

mkdir -p dist
rm dist/*.zip

cp src/manifest.json dist/
jq 'del(.applications)' dist/manifest.json > src/manifest.json

# for Chrome
zip -r "dist/${NAME}-${VERSION}-chrome.zip" src -x "*.DS_Store"

mv dist/manifest.json src/

# for Firefox
cd src
zip -r "../dist/${NAME}-${VERSION}-firefox.zip" * -x "*.DS_Store"

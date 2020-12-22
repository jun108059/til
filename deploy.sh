#!/usr/bin/env sh

# 오류 발생시 중단한다.
set -e

# 문서(md)를 build하여 html로 만든다. 
npm run docs:build

# build가 output된 폴더로 이동한다. 
cd docs/.vuepress/dist

# init + add + commit을 해준 다음
git init
git add -A
git commit -m '[Deploy]🎉Vuepress'

# Deploying to https://jun108059.github.io/til
git push -f git@github.com:jun108059/til.git master:gh-pages

cd -
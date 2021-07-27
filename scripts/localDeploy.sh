#!/bin/sh

deploy()
{
    git clone --single-branch --branch master git@github.com:FrSanchez/frsanchez.github.io.git _site
    bundle exec jekyll build
    cd _site
    git add --all
    git commit --message "Auto deploy from local on `date`"
    git status
    echo "About to push, press ENTER to deploy. Ctrl/C to abort"
    read YN
    git push
}

deploy

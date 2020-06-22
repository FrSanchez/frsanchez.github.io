#!/bin/sh

deploy()
{
  cd _site
  git init
  git config user.name "Travis CI"
  git config user.email "travis@travis-ci.org"
  git add --all
  git commit --message "Auto deploy Travis $TRAVIS_BUILD_NUMBER on `date`"
  git remote add deploy https://$GITHUB_TOKEN@github.com/FrSanchez/frsanchez.github.io.git >/dev/null 2>&1
  git push --force deploy master >/dev/null 2>&1
}

case "${TRAVIS_COMMIT_MESSAGE}" in
  *SKIP*)
    echo "Skip deploy"
    ;;
    *)
    deploy
    ;;
esac

#!/bin/bash

if [[ $* == *--deploy* ]];
    then npm run build;
fi

git add -A
git commit -m "$1"
git push

if [[ $* == *--deploy* ]];
    then npm run deploy;
fi
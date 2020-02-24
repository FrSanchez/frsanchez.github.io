---
layout: post
title: Binary Search Tree in Javascript
#date: #empty
tags: [BinarySearch, BinaryTree, Programing, Javascript] # add tag
image: assets/img/bintree.png # Add image post (optional)=
description: Sample implementation of a binary search tree in JavaScript. # Add post description (optional)
bootstrap: true
script: assets/js/binTree.js
---
This is a sample implementation of a Binary Serach Tree in JavaScript. Right now it is a work in progress, please
keep looking for updates for this post, as I will keep working on it.

The first step is to be able to insert new data (only numbers), without doing any rebalancing, and drawing the tree
using an HTML5 canvas element.

<canvas id="tree" width="600" height="500" ></canvas>

<label for="number">Number:</label>
<input type="text" id="number" name="number">
<button class="ui-button ui-widget ui-corner-all" id='insert'>Insert</button>

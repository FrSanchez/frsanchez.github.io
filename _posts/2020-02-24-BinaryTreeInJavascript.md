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

There will be a graphical representation of the tree in the are below that you can use to visualize the operations
as I keep progressing in this code.

<canvas id="tree" width="600" height="500" ></canvas>

<label for="number">Number:</label>
<input type="text" id="number" name="number">
<button class="ui-button ui-widget ui-corner-all" id='insert'>Insert</button>
<button class="ui-button ui-widget ui-corner-all" id='search'>Search</button>

First we have to define the basic piece, and that is going to be a Node:
{% highlight javascript %}
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  // ... other methods will go here
}
{% endhighlight %}
The JavaScript constructor takes a value to store in the current node as the value, and also
sets the pointers to the left and right nodes as null. This is important to make sure the variables
don't remain as undefined and also that they exist when accessing them from other methods.

As for the methods, let's start by implementing the insert. The core of the algorithm is to check
if the new data has to go either to the left, or to the right, and then call the same insert recursively
from the chosen node, like the code below that returns a boolean value to indicate whether the new value
was inserted or not:
{% highlight javascript %}
// ...
  insert(node) {    
    // First make sure we are inserting data but we also prevent duplicates
    if (node == null || typeof(node) == 'undefined' || this.data === node.data) {
      return false;
    }
    // now chose whether go left
    if (this.data > node.data) {
      if (this.left === null) {
        this.left = node;
        return true;
      }
      return this.left.insert(node);
    } else {
      // or go right
      if (this.right === null) {
        this.right = node;
        return true;
      }
      return this.right.insert(node);
    }
    return false;
  }
// ...
{% endhighlight %}

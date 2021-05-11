$(function() {
  var DEFAULT_RADIUS = 20;

  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }

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

    search(data) {
      if (data == null || typeof(data) == 'undefined') {
        return false;
      }
      if (this.data === data) {
        return this;
      }
      if (this.data > data && this.left) {
        return this.left.search(data);
      }
      if (this.data < data && this.right) {
        return this.right.search(data);
      }
      return false;
    }
  }

  class VNode extends Node {
    constructor(data, radius) {
      super(data);
      this.radius = radius;
      this.cx = 0;
      this.cy = 0;
    }

    setRadius(radius) { this.radius = radius; }

    highLight(context, node) {
      if(node == null || typeof(node) == 'undefined') {
        return;
      }
      if (node.cx == 0 || node.cy == 0) {
        return;
      }
      context.beginPath();
      context.moveTo(cx + this.radius, cy);
      context.arc(cx, cy, this.radius, 0, 2 * Math.PI, false);
      context.fill();
    }

    draw(context, unused, cy, left, right) {
      var cx = left + (right - left) / 2;

      if (this.left !== null) {
        context.beginPath();
        context.moveTo(cx - this.radius, cy + this.radius - 5);
        var nr = cx;
        var lcx = left + (nr - left) / 2;
        context.lineTo(lcx, cy + 25);
        context.stroke();
        this.left.draw(context, lcx, cy + 40, left, nr);
      }
      if (this.right != null) {
        context.beginPath();
        context.moveTo(cx + this.radius, cy + this.radius - 5);
        var nl = cx;
        var rcx = cx + (right - nl) / 2;
        context.lineTo(rcx, cy + 25);
        context.stroke();
        this.right.draw(context, rcx, cy + 40, nl, right);
      }
      if (this.data !== null && typeof this.data !== 'undefined') {
        this.cx = cx;
        this.cy = cy;
        context.beginPath();
        context.moveTo(cx + this.radius, cy);
        context.arc(cx, cy, this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = "#FBFBFB";
        context.fill();
        context.stroke();
        context.fillStyle = "#101010";
        context.fillText(this.data, cx, cy);
      }
    }
  }

  function getContext(canvas) {
    var context = canvas.getContext("2d");
    context.font = "bold 16px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.clearRect(0, 0, canvas.width, canvas.height);
    return context;
  }

  var canvas = $('#tree')[0];
  var root = null;
  var cx = canvas.width / 2;
  var cy = 25;

  function insert(data) {
    if (root === null) {
      root = new VNode(data, DEFAULT_RADIUS);
    } else {
      root.insert(new VNode(data, DEFAULT_RADIUS));
    }

    root.draw(getContext(canvas), cx, cy, 0, canvas.width);
    console.log(root);
  }

  $("#insert").click(function(event) {
    event.preventDefault();
    var val = $('#number').val();
    try {
      var number = JSON.parse(val);
    } catch (err) {
      console.log(err);
      return;
    }
    console.log(typeof(number));
    if (typeof(number) === 'object') {
      number.forEach(function(item, index){
        console.log(item); console.log(index);
        insert(item);
      });
    } else {
      insert(number);
    }

  });

  $('#search').click(function(event) {
    event.preventDefault();
    var number = JSON.parse($('#number').val());
    if (root !== null) {
      var node = root.search(number);
      console.log(node);
      if (node) {
        root.highLight(canvas.getContext("2d"), node);
      }
    }
  });
});

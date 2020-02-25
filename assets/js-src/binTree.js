$( function() {
  Node = function(data) {
    this.data = null;
    if (typeof data !== 'undefined') {
      this.data = data;
    }
    this.left = null;
    this.right = null;
    this.radius = 20;
  }

  Node.prototype.setRadius = function(radius) {
    this.radius = radius;
  }

  Node.prototype.getRadius = function()
  {
    return this.radius;
  }

  Node.prototype.draw = function(context, unused, cy, left, right) {
    var cx = left + (right - left ) / 2;

    if (this.left !== null) {
      context.beginPath();
      context.moveTo(cx - this.radius, cy + this.radius - 5);
      var nr = cx;
      var lcx = left + (nr - left ) / 2;
      context.lineTo(lcx, cy + 25);
      context.stroke();
      this.left.draw(context, lcx , cy + 40, left, nr);
    }
    if (this.right != null) {
      context.beginPath();
      context.moveTo(cx + this.radius, cy + this.radius - 5);
      var nl = cx;
      var rcx = cx + (right - nl) / 2;
      context.lineTo( rcx , cy + 25);
      context.stroke();
      this.right.draw(context, rcx, cy + 40, nl, right);
    }
    if (this.data !== null && typeof this.data !== 'undefined') {
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

  Node.prototype.insert = function(data) {
    if (data === null || typeof data === 'undefined') {
      return false;
    }

    if(this.data === null) {
      this.data = data;
      return true;
    }

    if (this.data === data) {
      return false;
    }

    if (this.data > data) {
      if (this.left === null) {
        this.left = new Node(data);
        this.left.setRadius(this.radius);
        return true;
      }
      return this.left.insert(data);
    } else {
      if(this.right === null) {
        this.right = new Node(data);
        this.right.setRadius(this.radius);
        return true;
      }
      return this.right.insert(data);
    }
    return false;
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

  var root = new Node();
  var cx = canvas.width / 2;
  var cy = 25;

  $( "button" ).click( function( event ) {
      event.preventDefault();
      var number = parseInt($('#number').val());
      root.insert(number);

      root.draw( getContext(canvas), cx, cy, 0, canvas.width);
      console.log(root);
    } );
});

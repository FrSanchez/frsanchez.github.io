(function() {
  var canvas, clear, context, counter, dlCanvas, draw, hex, hexFromRGB, imgData, queue, refreshSwatch, undo;

  function Stroke(centerX, centerY, radius1, radius2, ratio, color) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius1 = radius1;
    this.radius2 = radius2;
    this.ratio = ratio;
    this.color = color;
  }

  Stroke.prototype.draw = function(context, color) {
    var j, ref, th, total, x, y;
    if (color === null || typeof(color) === 'undefined') {
      color = this.color;
    }

    context.moveTo(this.centerX + this.radius1 + this.radius2, this.centerY);
    context.beginPath();
    total = Math.PI * this.ratio;
    for (th = j = ref = total; j >= 0; th = j += -0.01) {
      x = this.centerX + this.radius1 * Math.cos(th) + this.radius2 * Math.cos(th * this.ratio);
      y = this.centerY + this.radius1 * Math.sin(th) + this.radius2 * Math.sin(th * this.ratio);
      context.lineTo(x, y);
    }
    context.strokeStyle = "#" + color;
    context.stroke();
  };

  queue = [];
  canvas = document.getElementById('myCanvas');
  context = canvas.getContext('2d');
  imgData = context.getImageData(0, 0, canvas.width, canvas.height);
  hex = "";

  draw = function(stamp, color) {
    var r1 = $("#outerRadius").val();
    var r2 = $("#innerRadius").val();
    var ratio = $("#ratio").val();
    var cx = canvas.width / 2;
    var cy = canvas.height / 2;
    var s1 = new Stroke(cx, cy, r1, r2, ratio, hex);
    s1.draw(context, color);
    if (stamp) {
      queue.push(s1);
      imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    }
  };

  clear = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    queue = [];
  };

  undo = function() {
    var j, len, s;
    context.clearRect(0, 0, canvas.width, canvas.height);
    queue.pop();
    for (j = 0, len = queue.length; j < len; j++) {
      s = queue[j];
      s.draw(context);
    }
    imgData = context.getImageData(0, 0, canvas.width, canvas.height);
  };

  getHexFromRGB = function(r, g, b) {
    var i, j, len, val;
    hex = [r.toString(16), g.toString(16), b.toString(16)];
    for (i = j = 0, len = hex.length; j < len; i = ++j) {
      val = hex[i];
      if (val.length === 1) {
        hex[i] = "0" + val;
      }
    }
    return hex.join("").toUpperCase();
  };

  refreshSwatch = function() {
    var blue, green, red;
    red = $("#red").slider("value");
    green = $("#green").slider("value");
    blue = $("#blue").slider("value");
    hex = getHexFromRGB(red, green, blue);
    $("#swatch").css("background-color", "#" + hex);
  };

  dlCanvas = function() {
    var dt;
    context.putImageData(imgData, 0, 0);
    dt = canvas.toDataURL('image/png');
    this.href = dt;
  };

  $('#oR').attr("max", canvas.height / 2);
  $('#oR').attr("value", 200);
  $("#iR").attr("max", 100);
  $('#iR').attr("value", 20);
  $('#cycles').attr("max", 100);
  $('#cycles').attr("value", 60);
  $('#outerRadius').val(200);
  $('#innerRadius').val(20);
  $('#ratio').val(60);

  $("#red, #green, #blue").slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });

  $("#red").slider("value", 255);

  $("#green").slider("value", 140);

  $("#blue").slider("value", 60);

  $("button#draw").click(function(event) {
    event.preventDefault();
    draw(true, hex);
  });

  $("button#clear").click(function(event) {
    event.preventDefault();
    clear();
  });

  $("button#undo").click(function(event) {
    event.preventDefault();
    undo();
  });

  $('#oR').on('input change', function(e) {
    $('#outerRadius').val($(this).val());
  });
  $('#iR').on('input change', function(e) {
    $('#innerRadius').val($(this).val());
  });
  $('#cycles').on('input change', function(e) {
    $('#ratio').val($(this).val());
  });

  document.getElementById("dl").addEventListener('click', dlCanvas, false);

  counter = 0;

  setInterval(function() {
    var color;
    context.putImageData(imgData, 0, 0);
    switch (counter) {
      case counter = 0:
        color = "D0D0D0";
        break;
      case counter = 1:
        color = "808080";
        break;
      case counter = 2:
        color = "808080";
    }
    draw(false, color);
    counter = 1 - counter;
  }, 500);

}).call(this);

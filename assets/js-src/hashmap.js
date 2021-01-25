$(document).ready(function() {
  function hashForString(str) {
    var total = 0;
    for(var i = 0; i < str.length; i++) {
      total += str.charCodeAt(i);
    };
    return total;
  }
  $('#input').change( function() {
    var str = $(this).val();
    $('#hash').val( hashForString(str));
  })

// Holds the key value pair, as is the basis for a simple linked list
  class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }

  class HashMap {
    constructor() {
      this.table = new Array(20);
      for(var i =0; i < 20; i++) {
        this.table[i] = null;
      }
    }
    put(key, value) {
      if (typeof(key) === 'undefined' || typeof(value) === 'undefined')
        return;
      var hash = hashForString(key) % 20;
      if (!this.table[hash]) {
        this.table[hash] = new Node(key, value);
      } else {
        var node = this.table[hash];
        while (node.next != null) {
          node = node.next;
        }
        node.next = new Node(key, value);
      }
    }

    get(key) {
      if (typeof(key) === 'undefined')
        return;
      var hash = hashForString(key) % 20;
      var node = this.table[hash];
      while (node != null && node.key != key) {
        node = node.next;
      }
      if (node) {
        return node.value;
      } else {
        return 0;
      }
    }
  }

  var hm = new HashMap();
  hm.put("one", "text 1");
  hm.put("two", "text 2");
  console.log(hm.get("one"));
  console.log(hm.get("two"));
});

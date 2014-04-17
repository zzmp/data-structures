var makeDoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    // O(1)
    var node = makeNode(value);

    if (list.head === null) {
      list.head = list.tail = node;
    } else {
      node.next = list.head;
      list.head = node;
    }
  };

  list.addToTail = function(value){
    // O(1)
    var node = makeNode(value);

    if (list.head === null) {
      list.head = list.tail = node;
    } else {
      node.previous = list.tail;
      list.tail = list.tail.next = node;
    }
  };

  list.removeHead = function(){
    // O(1)
    if (list.head === null) {
      return undefined;
    } else if (list.head === list.tail) {
      list.tail = null;
    }
    list.head = list.head.next;
    list.head && (list.head.previous = null);
  };

  list.removeTail = function() {
    // O(1)
    if (list.tail === null) {
      return undefined;
    } else if (list.tail === list.head) {
      list.head = null;
    }
    list.tail = list.tail.previous;
    list.tail && (list.tail.next = null);
  };

  list.contains = function(target){
    // O(n)
    var node = list.head;
    while (node && node.value !== target) {
      node = node.next;
    }

    return !!node;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};

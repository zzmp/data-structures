var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // O(1)
    var node = makeNode(value);

    if (list.head === null) {
      list.head = list.tail = node;
    } else {
      list.tail = list.tail.next = node;
    }
  };

  list.removeHead = function(){
    // O(1)
    var node = list.head;
    if (node === null) {
      return undefined;
    } else if (node === list.tail) {
      list.tail = null;
    }
    list.head = node.next;

    return node;
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
  node.next = null;

  return node;
};

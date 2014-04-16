var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);

    if (list.head === null) {
      list.head = list.tail = node;
    } else {
      list.tail.next = list.tail = node;
    }
  };

  list.removeHead = function(){
    var node = list.head;
    if (node === null) {
      return undefined;
    } else if (node === list.tail) {
      list.tail = null;
    }
    list.head = node.next;

    return node;
  };

  list.contains = function(target, node){

  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

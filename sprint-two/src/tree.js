var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;

  return _.extend(newTree, treeMethods);
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var node = makeTree(value);
  if (!this.children) {
    this.children = [node];
  } else {
    this.children.push(node);
  }
};

treeMethods.contains = function(target){
  var recurser = function(children) {
    return _.any(children, function(node) {
      return node.value === target || recurser(node.children);
    });
  };

  return recurser(this.children);
};

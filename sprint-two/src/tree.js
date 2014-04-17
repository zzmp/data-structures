var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = null;
  newTree.parent = null;

  return _.extend(newTree, treeMethods);
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var node = makeTree(value);
  node.parent = this;
  if (!this.children) {
    this.children = [node];
  } else {
    this.children.push(node);
  }
};

treeMethods.removeFromParent = function() {
  this.parent.children.splice(this.parent.children.indexOf(this), 1);
  this.parent = null;
};

treeMethods.contains = function(target){
  var recurser = function(children) {
    return _.any(children, function(node) {
      return node.value === target || recurser(node.children);
    });
  };

  return recurser(this.children);
};

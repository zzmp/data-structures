var makeBinarySearchTree = function(value){
  var bst = {};
  bst.value = value;
  bst.left = undefined;
  bst.right = undefined;

  return _.extend(bst, bstMethods);
};

var bstMethods = {};

bstMethods.insert = function(value) {
  // O(n) tree may be unbalanced
  if (value < this.value) {
    this.left ? this.left.insert(value) :
                this.left = makeBinarySearchTree(value);
  } else if (value > this.value) {
    this.right ? this.right.insert(value) :
                 this.right = makeBinarySearchTree(value);
  }
};

bstMethods.contains = function(value) {
  // O(n) tree may be unbalanced
  if (value < this.value) {
    return !!this.left && this.left.contains(value);
  } else if (value > this.value) {
    return !!this.right && this.right.contains(value);
  } else {
    return true;
  }
};

bstMethods.depthFirstLog = function(callback) {
  // O(n)
  callback(this.value);
  this.left && this.left.depthFirstLog(callback);
  this.right && this.right.depthFirstLog(callback);
};

bstMethods.breadthFirstLog = function(callback) {
  var node = this;
  var queue = [node];

  while (queue.length) {
    node = queue.shift();
    callback(node.value);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
}

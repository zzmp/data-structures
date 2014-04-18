var makeBinarySearchTree = function(value){
  var bst = {};
  bst.value = value;
  bst.left = undefined;
  bst.right = undefined;
  bst.counter = 0;

  return _.extend(bst, bstMethods);
};

var bstMethods = {};

bstMethods.insert = function(value) {
  // O(n) tree may be unbalanced
  if (value === this.value) return;
  var depth = arguments[1] ? arguments[1] : 0;
  var root = arguments[2] || this;
  var target = undefined;

  if (value < this.value) {
    target = this.left;
    this.left = this.left || makeBinarySearchTree(value);
  } else if (value > this.value) {
    target = this.right;
    this.right = this.right || makeBinarySearchTree(value);
  }

  if (target) {
    target.insert(value, depth+1, root);
  } else {
    root.counter++;
    (((Math.log(root.counter) / Math.log(2)) * 2) < depth) && root.rebalance();
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
};

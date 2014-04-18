var makeBinarySearchTree = function(value){
  var bst = {};
  bst.value = value;
  bst.left = undefined;
  bst.right = undefined;
  bst.counter = 1;
  return _.extend(bst, bstMethods);
};

var bstMethods = {};

bstMethods.insert = function(value) {
  // O(n) tree may be unbalanced
  if (value === this.value) return;
  var depth = arguments[1] ? arguments[1] : 1;
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
    //console.log(root.counter, depth, (((Math.log(root.counter) / Math.log(2)) * 2) < depth));
    (((Math.log(root.counter) / Math.log(2)) * 2) < depth) && root.rebalance(0);
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

bstMethods.rebalance = function (depth) {
  var sortedValues = [];
  var sort = function(val) {
    sortedValues.push(val);
  };

  this.depthFirstLog(sort);
  var root;
  var recursor = function recursor (values) {
    if (!values.length) return;
    var node = values.splice( Math.floor(values.length/2), 1)[0];
    if (root) {
      root.insert(node);
    } else {
      root = makeBinarySearchTree(node)
    }
    recursor(values.slice(0,values.length/2));
    recursor(values.slice(values.length/2));
  }(sortedValues);

  this.value = root.value;
  this.left = root.left;
  this.right = root.right;
  this.counter = root.counter;
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

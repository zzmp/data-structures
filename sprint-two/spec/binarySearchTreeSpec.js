var assert = chai.assert;

describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(5);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog'", function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it("should have a method named 'breadthFirstLog'", function() {
    expect(binarySearchTree.breadthFirstLog).to.be.a('function');
  });

  it("should insert values at the correct location in the tree", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it("should have a working 'contains' method", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    assert.isTrue(binarySearchTree.contains(7));
    assert.isFalse(binarySearchTree.contains(8));
  });

  it("should execute a callback on every value in a tree using 'depthFirstLog'", function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(1);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(5);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    assert.isTrue(_.every(array, function(val, ind) {
      return val === [5,1,2,3,4,6,7][ind];
    }));
  });

  it("should execute a callback on every value in a tree using 'breadthFirstLog'", function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(1);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(5);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.breadthFirstLog(func);
    assert.isTrue(_.every(array, function(val, ind) {
      return val === [5,1,6,2,7,3,4][ind];
    }));
  });

  it("should rebalance", function(){
    var array = [];
    _.each([6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21], function(value) {
      binarySearchTree.insert(value);
    });

  });

});

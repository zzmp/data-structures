var expect = chai.expect;
var assert = chai.assert;

describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    assert.isTrue('value' in tree);
  });

  it("should have the method named 'removeFromParent', and a property named 'parent'", function() {
    expect(tree.removeFromParent).to.be.a('function');
    assert.isTrue('parent' in tree);
  });

  it("should have the method named 'traverse'", function() {
    expect(tree.traverse).to.be.a('function');
  });

  it("should add children to the tree", function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it("should add parent to children", function() {
    tree.addChild(4);
    tree.addChild(5);
    assert.isTrue(_.every(tree.childen, function(node) {
      return node.parent === tree;
    }));
  });

  it("should remove parent from child", function() {
    tree.addChild(4);
    var child = tree.children[0];
    child.removeFromParent();
    assert.isFalse(tree.contains(4));
    expect(child.parent).to.equal(null);
  });

  it("should return true for a value that the tree contains", function(){
    tree.addChild(5);
    assert.isTrue(tree.contains(5));
  });

  it("should return false for a value that was not added", function(){
    tree.addChild(5);
    assert.isFalse(tree.contains(6));
  });

  it("should be able to add children to a tree's child", function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it("should correctly detect nested children", function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    assert.isTrue(tree.contains(7));
    assert.isTrue(tree.contains(8));
  });

  it("should execute callback function once on each node", function() {
    tree.addChild(1);
    tree.addChild(2);
    tree.children[0].addChild(3);
    tree.children[0].addChild(4);
    tree.children[0].children[0].addChild(5);
    tree.children[1].addChild(6);
    var attendance = [];
    var callback = function(val) {
      attendance.push(val);
    };
    tree.traverse(callback);
    expect(attendance).to.include(undefined);
    expect(attendance).to.include(1);
    expect(attendance).to.include(2);
    expect(attendance).to.include(3);
    expect(attendance).to.include(4);
    expect(attendance).to.include(5);
    expect(attendance).to.include(6);
  });

});

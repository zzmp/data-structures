var expect = chai.expect;
var assert = chai.assert;

describe("set", function() {
  var set;
  var testSet;

  beforeEach(function() {
    set = makeSet();
    testSet = [1,'1',[],[1],{},{1:1},null,undefined];
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it("should add values to a set", function(){
    _.each(testSet, function (val) {
      set.add(val);
    });
    assert.isTrue(_.every(testSet, function(val) {
      return set.contains(val);
    }));
  });

  it("should remove values from a set", function(){
    _.each(testSet, function (val) {
      set.add
      (val);
    });
    _.each(testSet, function (val) {
      set.remove(val);
    });
    assert.isTrue(_.every(testSet, function(val) {
      return !set.contains(val);
    }));
  });

});

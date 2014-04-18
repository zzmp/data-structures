var expect = chai.expect;
var assert = chai.assert;

describe("bloomFilter", function() {
  var bloomFilter;
  var hashedVals;

  beforeEach(function() {
    bloomFilter = new BloomFilter(18, 3);
    hashedVals = [0, 3333, 6666, 9999];
    _.each(hashedVals, function(val) {
      bloomFilter.set('' + val);
    });
  });

  it("should store values that were inserted", function() {
    assert.isTrue(bloomFilter.has('' + 3333));
  });

  it("might not contain values that were not inserted", function() {
    assert.isFalse(bloomFilter.has('' + 2222));
  });

});

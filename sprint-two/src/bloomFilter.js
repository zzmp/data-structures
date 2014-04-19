var BitArray = function (bound) {
  if (bound > 31) {
    throw 'err';
  }

  this._instance = ~(Math.pow(2, bound + 1) - 1);
};

BitArray.prototype.set = function (pos) {
  this._instance |= Math.pow(2, pos);
};

BitArray.prototype.get = function (pos) {
  return !!(this._instance & Math.pow(2, pos));
};

var BloomFilter = function (m, k) {
  this._m = m;
  this._k = k;
  this._filter = new BitArray(this._m);

  this._hashers = [];
  for ( var i = 0; i < this._k; i++ ) {
    this._hashers.push(this.makeHash(i));
  }

};

BloomFilter.prototype.set = function(key) {
  var m = this._m;
  var filter = this._filter;
  _.each(this._hashers, function(hasher) {
    filter.set(hasher(key, m));
  });
};

BloomFilter.prototype.has = function(key) {
  var m = this._m;
  var filter = this._filter;
  return _.chain(this._hashers)
    .map(function (hasher) {
      return filter.get(hasher(key, m));
    })
    .every()
    .value();
};

BloomFilter.prototype.makeHash = function (seed) {
  return function (key, m) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash = (hash<<seed) + hash + key.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % m;
  };
};

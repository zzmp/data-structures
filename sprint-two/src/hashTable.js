var HashTable = function(){
  this._limit = 8;
  this._counter = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  i = this.linearProbe(i, k);

  var elem = {};
  elem[k] = v;
  this._storage.set(i, elem);

  if (++this._counter / this._limit >= 0.75) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var elem = this._storage.get(this.linearProbe(i, k));

  return elem && elem[k];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);

  if (--this._counter / this._limit <= 0.25) {
    this.resize(this._limit / 2);
  }
};

HashTable.prototype.resize = function(size) {
  if (size < 8) return;

  var oldStorage = this._storage;
  var that = this;
  this._limit = size;
  this._counter = 0;
  this._storage = makeLimitedArray(this._limit);

  oldStorage.each(function (val) {
    if (!val) return;
    var k = Object.keys(val)[0];
    var v = val[k];

    HashTable.prototype.insert.call(that, k, v);
  });
};

HashTable.prototype.linearProbe = function(i, k) {
  var elem = this._storage.get(i);

  while ( elem && !(k in elem) ) {
    i = ++i % this._limit;
    elem = this._storage.get(i);
  }

  return i;
};

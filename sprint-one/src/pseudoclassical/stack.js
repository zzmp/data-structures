var Stack = function() {
  this._storage = {};
  this._size = 0;
};

Stack.prototype.push = function(value) {
  this._storage[this._size++] = value;
};

Stack.prototype.pop = function() {
  this._size && this._size--;
  var elem = this._storage[this._size];
  delete this._storage[this._size];
  return elem;
};

Stack.prototype.size = function() {
  return this._size;
};

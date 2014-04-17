var makeStack = function() {
  var instance = {
    _storage: {},
    _size: 0
  };

  return _.extend(instance, stackMethods);
};

var stackMethods = {
  push: function(value) {
    this._storage[this._size++] = value;
  },
  pop: function() {
    this._size && this._size--;
    var elem = this._storage[this._size];
    delete this._storage[this._size];

    return elem;
  },
  size: function() {
    return this._size;
  }
};

var makeStack = function() {
  var instance = Object.create(stackMethods);
  instance._storage = {};
  instance._tail = 0;

  return instance;
};

var stackMethods = {
  push: function(value) {
    this._storage[this._tail++] = value;
  },
  pop: function() {
    this._tail && this._tail--;
    var elem = this._storage[this._tail];
    delete this._storage[this._tail];

    return elem;
  },
  size: function() {
    return this._tail;
  }
};

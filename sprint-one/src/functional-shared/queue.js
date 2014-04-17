var makeQueue = function(){
  var instance = {
    _storage: {},
    _head: 0,
    _tail: 0
  };

  return _.extend(instance, queueMethods);
};

var queueMethods = {
  enqueue: function(value) {
    this._storage[this._tail++] = value;
  },
  dequeue: function() {
    var elem = this._storage[this._head];
    this.size() && delete this._storage[this._head++];

    return elem;
  },
  size: function() {
    return this._tail - this._head;
  }
};

var makeQueue = function() {
  var instance = Object.create(queueMethods);
  instance._storage = {};
  instance._head = 0;
  instance._tail = 0;

  return instance;
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

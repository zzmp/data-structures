var Queue = function() {
  this._storage = {};
  this._head = 0;
  this._tail = 0;
};

Queue.prototype.enqueue = function(value) {
  this._storage[this._tail++] = value;
};

Queue.prototype.dequeue = function() {
  var elem = this._storage[this._head];
  this.size() && delete this._storage[this._head++];
  return elem;
};

Queue.prototype.size = function() {
  return this._tail - this._head;
};

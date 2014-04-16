var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail++] = value;
};

Queue.prototype.dequeue = function() {
  var elem = this.storage[this.head];
  this.size() && delete this.storage[this.head++];
  return elem;
};

Queue.prototype.size = function() {
  return this.tail - this.head;
};

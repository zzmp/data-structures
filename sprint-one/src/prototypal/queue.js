var makeQueue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.head = 0;
  instance.tail = 0;

  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.tail++] = value;
  },
  dequeue: function() {
    var elem = this.storage[this.head];
    this.size() && delete this.storage[this.head++];
    return elem;
  },
  size: function() {
    return this.tail - this.head;
  }
};

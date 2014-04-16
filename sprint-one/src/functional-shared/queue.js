var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {
    storage: {},
    head: 0,
    tail: 0
  };

  // Use an object with numeric keys to store values

  // Implement the methods below
  return _.extend(instance, queueMethods);
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

var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {
    storage: {},
    tail: 0
  };

  // Implement the methods below
  return _.extend(instance, stackMethods);
};

var stackMethods = {
  push: function(value) {
    this.storage[this.tail++] = value;
  },
  pop: function() {
    this.tail && this.tail--;
    var elem = this.storage[this.tail];
    delete this.storage[this.tail];
    return elem;
  },
  size: function() {
    return this.tail;
  }
};

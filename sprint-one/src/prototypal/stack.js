var makeStack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.tail = 0;

  return instance;
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

var makeStack = function() {
  var instance = {
    storage: {},
    tail: 0
  };

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

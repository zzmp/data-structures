var Stack = function() {
  this.storage = {};
  this.tail = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.tail++] = value;
};

Stack.prototype.pop = function() {
  this.tail && this.tail--;
  var elem = this.storage[this.tail];
  delete this.storage[this.tail];
  return elem;
};

Stack.prototype.size = function() {
  return this.tail;
};

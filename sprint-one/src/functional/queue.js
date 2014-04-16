var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;
  var tail = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[tail++] = value;
  };

  instance.dequeue = function(){
    var elem = storage[head];
    instance.size() && delete storage[head++];
    return elem;
  };

  instance.size = function(){
    return tail - head;
  };

  return instance;
};

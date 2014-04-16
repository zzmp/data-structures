var makeQueue = function(){
  var instance = {};
  var storage = {};
  var head = 0;
  var tail = 0;

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

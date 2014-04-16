var makeStack = function(){
  var instance = {};
  var storage = {};
  var size = 0;

  instance.push = function(value){
    storage[size++] = value;
  };

  instance.pop = function(){
    size && size--;
    var elem = storage[size];
    delete storage[size];

    return elem;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};

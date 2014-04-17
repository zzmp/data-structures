var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  // O(1)
  this._storage[item] = true;
};

setPrototype.contains = function(item){
  // O(1)
  return item in this._storage;
};

setPrototype.remove = function(item){
  // O(1)
  delete this._storage[item];
};

var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  // O(1)
  if (typeof item === 'function') throw error;
  this._storage[JSON.stringify(item)] = true;
};

setPrototype.contains = function(item){
  // O(1)
  if (typeof item === 'function') throw error;
  return JSON.stringify(item) in this._storage;
};

setPrototype.remove = function(item){
  // O(1)
  delete this._storage[JSON.stringify(item)];
};

var Graph = function(){
  this._adjacencyList = {};
  this._vertices = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  // O(1)
  toNode = this._vertices++ === 1 ?
    Object.keys(this._adjacencyList)[0] : toNode;

  this._adjacencyList[newNode] = this._adjacencyList[newNode] || [];
  toNode !== undefined && this.addEdge(newNode, toNode);
};

Graph.prototype.contains = function(node){
  // O(1)
  return !! this._adjacencyList[node];
};

Graph.prototype.removeNode = function(node){
  // O(V*E)
  _.each(this._adjacencyList[node], function(val) {
    this.removeEdge(node, val);
  });

  delete this._adjacencyList[node];
  this._vertices--;
};

Graph.prototype.getEdge = function(fromNode, toNode){
  // O(E)
  return this._adjacencyList[fromNode].indexOf(toNode) !== -1;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // O(1)
  this._adjacencyList[fromNode].push(toNode);
  this._adjacencyList[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  // O(E)
  this._adjacencyList[fromNode]
      .splice(this._adjacencyList[fromNode].indexOf(toNode), 1);
  this._adjacencyList[toNode]
      .splice(this._adjacencyList[toNode].indexOf(fromNode), 1);
  this._adjacencyList[fromNode].length || this.removeNode(fromNode);
  this._adjacencyList[toNode].length || this.removeNode(toNode);
};

Graph.prototype.forEachNode = function(callback) {
  // O(V)
  _.each(this._adjacenyList, function(val, key) {
    callback.call(key, val);
  });
};

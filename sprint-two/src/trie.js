var Trie = function(dict) {

  var Node = function() {
    this._children = {};
    this._terminal = false;
    this._preference = 0;
  };

  Node.prototype.insert = function (word, preferred) {
    var char = word.substr(0, 1);

    if (word.length) {
      this._children[char] =
        this._children[char] || new Node();
      this._children[char].insert(word.substr(1), preferred);

      if (preferred) {
        this._children[word] =
          this._children[word] || new Node();
        this._children[word]._terminal = true;
      }
    } else {
      this._terminal = true;
    }

    if (preferred && char.length) {
      this._children[word]._preference++;
    }
  };

  Node.prototype.suggest = function (word) {
    if (this._terminal) {
      return word;
    }

    var pref;
    var char;
    _.each(this._children, function(node, branch) {
      if (!pref || node._preference > pref) {
        pref = node._preference;
        char = branch;
      }
    });

    return this._children[char].suggest(word + char);
  };

  this._root = new Node();

  var trie = this;
  _.each(dict, function (word) {
    if (typeof word !== 'string') {
      throw 'Unexpected word: words should be strings';
    }

    trie.define(word);
  });
};

Trie.prototype.define = function (word) {
  this._root.insert(word);
};

Trie.prototype.suggest = function (str) {
  var node = this._root;
  var word = str;

  while (str.length && node) {
    var char = str.substr(0,1);
    str = str.substr(1);
    node = node._children[char];
  }

  return node && node.suggest(word);
};

Trie.prototype.prefer = function (word) {
  this._root.insert(word, true);
};

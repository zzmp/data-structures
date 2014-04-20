var Anagrammer = function (dictionary) {

  this._anagrams = {};

  var anagrams = this._anagrams;
  _.each(dictionary, function (word) {
    var key = word.split('').sort().join('');
    anagrams[key] = anagrams[key] || [];
    anagrams[key].push(word);
  });

};

Anagrammer.prototype.search = function (letters) {
  var words = [];
  var anagrams = this._anagrams;

  var keys = [[]];
  // retrieve the power set of letters
  _.each(letters, function (letter) {
    var keysLength = keys.length;
    for (var ind = 0; ind < keysLength; ind++) {
      var newKey = keys[ind].concat(letter);
      keys.push(newKey);
    }
  });

  _.chain(keys)
    .map(function (val) {
      return val.sort().join('');
    })
    .uniq()
    .each(function (val) {
      words = anagrams[val]
        ? words.concat(anagrams[val]) : words;
    });
  return words;
};

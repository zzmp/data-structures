var expect = chai.expect;

describe("hashTable", function() {
  var hashTable;
  var people = [["Steven", "Tyler"], ["George", "Harrison"], ["Mr.", "Doob"], ["Dr.", "Sunshine"], ["John", "Resig"], ["Brendan", "Eich"], ["Alan", "Turing"]];


  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert', 'remove', and 'retrieve", function() {
    expect(hashTable.insert).to.be.a('function');
    expect(hashTable.remove).to.be.a('function');
    expect(hashTable.retrieve).to.be.a('function');
  });

  it("should store values that were inserted", function() {
    hashTable.insert("Steven", "Seagal");
    expect(hashTable.retrieve("Steven")).to.equal("Seagal");
  });

  it("should not contain values that were not inserted", function() {
    hashTable.insert("Steven", "Spielberg");
    expect(hashTable.retrieve("Steven")).not.to.equal("Seagal");
  });

  it("should not contain values that were removed", function() {
    hashTable.insert("Steven", "Tyler");
    hashTable.remove("Steven");
    expect(hashTable.retrieve("Steven")).to.equal(null);
  });

  it("should handle hash function collisions", function(){
    expect(window.getIndexBelowMaxForKey).to.be.ok;
    var v1 = '1', v2 = '2', v3 = '3', v4 = '4',
        v5 = '5', v6 = '6', v7 = '7', v8 = '8',
        v9 = '9', v10 = '10';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    hashTable.insert(v3, v3);
    hashTable.insert(v4, v4);
    hashTable.insert(v5, v5);
    hashTable.insert(v6, v6);
    hashTable.insert(v7, v7);
    hashTable.insert(v8, v8);
    hashTable.insert(v9, v9);
    hashTable.insert(v10, v10);
    expect(hashTable.retrieve(v9)).to.equal(v9);
    expect(hashTable.retrieve(v10)).to.equal(v10);
  });

  // (Extra credit! Remove the extra 'x' when you want the following tests to run)
  it("should double in size when needed", function() {
    for (var i = 0; i < people.length; i++){
      var firstName = people[i][0], lastName = people[i][1];
      hashTable.insert(firstName,lastName);
    }
    expect(hashTable._limit).to.equal(16);
  });

  it("should halve in size when needed", function() {
    for (var i = 0; i < people.length; i++){
      var firstName = people[i][0], lastName = people[i][1];
      hashTable.insert(firstName,lastName);
    }
    expect(hashTable._limit).to.equal(16);
    hashTable.remove("George");
    hashTable.remove("Dr.");
    hashTable.remove("Steven");
    hashTable.remove("John");
    hashTable.remove("Mr.");
    expect(hashTable._limit).to.equal(8);
  });
});

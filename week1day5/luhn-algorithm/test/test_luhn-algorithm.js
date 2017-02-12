var assert = require("chai").assert;
var check = require("../lib/luhn-algorithm");

describe("luhn-algorithm", function() {
  it("should return true if the number does not match luhn algorithm", function() {
    var num = '79927398713';
    var result = check(num);
    assert.isTrue(result);
  });

  it("should return false if the number does not match luhn algorithm", function() {
    var num = '79927398710';
    var result = check(num);
    assert.isFalse(result);


  });
});
/*
 * JavaScript implementation of the Luhn algorithm, with calculation and validation functions
 */

/* luhn_checksum
 * Implement the Luhn algorithm to calculate the Luhn check digit.
 * Return the check digit.
 */
function luhnChecksum(code) {
  var len = code.length;
  var parity = len % 2;
  var sum = 0;
  for (var i = len - 1; i >= 0; i--) {
    var d = parseInt(code.charAt(i), 10);
    if (i % 2 === parity) {
      d *= 2;
    }
    if (d > 9) {
      d -= 9;
    }
    sum += d;
  }
  return sum % 10;
}

/* luhn_caclulate
 * Return a full code (including check digit), from the specified partial code (without check digit).
 */
function luhnCaclulate(partcode) {
  var checksum = luhnChecksum(partcode + "0");
  return checksum === 0 ? 0 : 10 - checksum;
}

/* luhn_validate
 * Return true if specified code (with check digit) is valid.
 */
function check(fullcode) {
  return luhnChecksum(fullcode) === 0;
}

// // takes the form field value and returns true on valid number
// function check(arg) {
//   // accept only digits, dashes or spaces
//   if (/[^0-9-\s]+/.test(arg)) {
//     return false;
//   }
//   // The Luhn Algorithm. It's so pretty.
//   var nCheck = 0;
//   var nDigit = 0;
//   var bEven = false;
//   value = arg.replace(/\D/g, "");

//   for (var n = value.length - 1; n >= 0; n--) {
//     var cDigit = value.charAt(n);
//     nDigit = parseInt(cDigit, 10);

//     if (bEven) {
//       if ((nDigit *= 2) > 9) {
//         nDigit -= 9;
//       }

//       nCheck += nDigit;
//       bEven = !bEven;
//     }
//   }
//   return (nCheck % 10) === 0;
// }
// console.log(check(79927398713));
module.exports = check;
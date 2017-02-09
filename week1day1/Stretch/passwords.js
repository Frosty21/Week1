/*
from password it removes first two elements and converts the third into a string

*/
//var process;
// this process is for the terminal, but the compass console doesnt allow it
// var password = process.argv.slice(2).toString();
var password = "password";



function obfuscate(password){
  var tempstr = "";

  for (var i = 0; i < password.length; i ++) {

    if (password[i] === "a") {
      tempstr +=  "4";
    }
    else if (password[i] === "e") {
      tempstr += "3";
    }
    else if (password[i] === "o") {
      tempstr += "0";
    }
    else if (password[i] === "l") {
      tempstr += "1";
    }
    else {
      tempstr += password[i];
    }


  }
  return tempstr;
}

console.log(obfuscate(password));

/* this will store four string variables in a array removing the first two
by slicing leaving the two string numbers.
*/
var args = process.argv.slice(2);
/* then the two string numbers are converted into a number variable and
added together displayed into te console */
console.log(Number(args[0]) + Number(args[1]));

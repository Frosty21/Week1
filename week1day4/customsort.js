var array = [10, 2, 5, 1, 9];
array.sort(function(a, b) {
  return a - b;
});
console.log(array);

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
students.sort(function(a, b) {
  var nameA = new RegExp(a.name, 'i');
  var nameB = new RegExp(b.name, 'i');
  if (nameA < nameB) {
    return -1;
  }
  if (nameB < nameA) {
    return 1;
  }
  return b.age - a.age;
});


console.log(students);
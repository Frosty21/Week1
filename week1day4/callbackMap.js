var map;

map = new Map(); //creates a new object

// set a new data value into map with a true and
// false boolean value with a string
map.set(true, [
    "1 + 1 = 2",
    "cows are animals",
    "grass is green",
]);
map.set(false, [
    "the moon is made from cheese",
    "the earth is flat",
    "pyramids were made by aliens",
]);
console.log(map)
// then the map object is looped for each value
// passing the value and key
map.forEach(function (value, key) {
    console.log(typeof key, key, typeof value);
});

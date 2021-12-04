// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat() {
    return cats.push("Ralph")
}
function destructivelyPrependCat(){
    return cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    return cats.pop()
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}
function appendCat(name){
    const newCats = [...cats, "Broom"]
    return newCats
}
function prependCat(name) {
    const newCats = ["Arnold", ...cats]
    return newCats
}
function removeLastCat(){
    return cats.slice(0,2)
}

function removeFirstCat(){
    return cats.slice(1)
}










// const cats = ["Milo","Otis","Garfield"]

// function destructivelyAppendCat(){
//     return cats.push(`Ralph`);
// }

// function destructivelyPrependCat(){
//     return cats.unshift(`Bob`);
// }

// function destructivelyRemoveLastCat(){
//     return cats.pop();
// }

// function destructivelyRemoveFirstCat(){
//     return cats.shift();
// }


// const cats = ["Milo","Otis","Garfield"]

// function appendCat(){
//     let newCats = [...cats, "Broom"]
//     return newCats;
// }

// function prependCat(){
//     let newerCats = ["Arnold", ...cats]
//     return newerCats;
// }

// function removeLastCat(){
//     return cats.slice(0,2);
// }

// function removeFirstCat(){
//     return cats.slice(1);
// }


/*
ARRAYS:
Array - a list with items listed in a particular order
* array.length = number of items in the list
- Arrays are expressive, tells other developers, 
"Hey, this stuff is related"

To update a value in an array: array[#] = "New value"
^ Though const is how array variables are defined, we can change the value of the individual values within the array

Arrays can be nested in other arrays

JavaScript has built in array-methods, like .toUpperCase




ARRAY METHODS:
Add (destructivley):
.push() - adds to end
.unshift() - adds to start

Spread Operator - allows us to add elements to an array and create a new copy (essentailyl non-destructive); could also duplicate the array without adding new values, only to change the name to further manipulate

*operators and methods are different

Remove (destructively):
.pop() - removes from end
.shift() - removes from start

Remove (non-destructively):
.slice() - can take 0, 1, or 2 arguments
^ one argument, where the slice begins
^ with two arguments, first is where slice begins, second is the location before which it ends.

To add, delete, or replace elements:
.splice() - can take multiple arguments
^ with one argument, it will keep everything before the location specified
** negative numbers work the same way, but backwards, and they start at -1, instead of 0, becuase we cannot have a -0

^ with two arguments, array.splice(start, deletCount)
ie:
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

days.splice(2, 3);
// => ["Wed", "Thu", "Fri"]

days;
// => ["Mon", "Tue", "Sat", "Sun"]

3+ arguments:
array.splice(start, deleteCount, item1, item2, ...)
^ after the first two numbers, the rest of the items replace starting at the first location
Note* second number is the number of elements to splice: if 1, that means it is the same element as the element we are starting the splice at (it is the lowest number, and essentially means to just delete the first argument's location)


Using bracket notation helps replace single values better than any other method. Much more to the point.


We can also combine a spread operator with .slice() to change an array non-destructively 


const menu = [
  "Jalapeno Poppers",
  "Cheeseburger",
  "Fish and Chips",
  "French Fries",
  "Onion Rings",
];

const newMenu = [
  ...menu.slice(0, 1),
  "Veggie Burger",
  "House Salad",
  "Teriyaki Tofu",
  ...menu.slice(3),
];

menu;
// => ["Jalapeno Poppers", "Cheeseburger", "Fish and Chips", "French Fries", "Onion Rings"]

newMenu;
// => ["Jalapeno Poppers", "Veggie Burger", "House Salad", "Teriyaki Tofu", "French Fries", "Onion Rings"]


^^ ...menu gives us the same array
* menu.slice(0,1) starts the slice at the first element, then starts replacing after the first element
* menu.slice(3) adds back the rest of the menu items starting with the fourth item


*/
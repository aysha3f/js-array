// ### 1. Declare an array 
// 1. Declare an array with 5 elements containing fruits
// 2. console log the 3rd index element
// 3. change the value of the 2nd index element to jambura
// 4. console log the final array

// task-1

var fruits = ['Apple', 'Mango', 'Guava', 'Banana', 'Kiwi'];

// console.log(fruits[3]);

fruits[2] = ' Jambura';
// console.log(fruits);

// task-2

// ### 2. Add or remove elements
// 1. Declare an array of 3 tourist destinations
// 2. Add a new tourist destination to your tourist array
// 3. Add two more to your array
// 4. Remove the last tourist destination you have added
// 5. display the final array as output

var touristDestinations = ['Tokyo','Sydney','Rome'];

touristDestinations.push ('New York');
// console.log(touristDestinations);

touristDestinations.push ('Japan', 'Paris');
// console.log(touristDestinations);

touristDestinations.pop()
// console.log(touristDestinations);


// task -3

// ### 3. Checking Array Membership with ‘includes’

// **Instructions:**

// 1. Create an array of books containing different book.

// 2. Use the includes method to check if the array contains a javascript book.

// 3. Print a message to the console indicating whether the element is present in the array or not.
 
var books = ["The Hobbit", "Clean Code", "Eloquent JavaScript", "1984", "JavaScript"]


// console.log(books.includes('JavaScript'));

if(books.includes('JavaScript')){
    // console.log("The array contains a JavaScript book.");
}
else{
    // console.log("No JavaScript book found in the array.");
}


// task-4

// ### 4. Checking if it's an Array

// **Instructions:**

// 1. Create different variables, each containing either an array or a non-array value.

// 2. Now use isArray to check if each variable is an array.

// 3. Print a message to the console indicating whether each variable is an array or not.


var foods = [];
var fruits = "komola";
var books= '1467';
// console.log(Array.isArray(foods))
// console.log(Array.isArray(fruits))
// console.log(Array.isArray(books))
 if(Array.isArray(fruits)){
    // console.log( 'Fruits is  an array');
 }
 else {
    // console.log( 'Fruits is  an not array');
 }

 if(Array.isArray(books)){
    // console.log( 'books is  an array');
 }
 else {
    // console.log( 'books is  an not array');
 }


//  task-5


// ### 5. Combining Arrays

// **Instructions:**

// 1. Create two arrays of your choice.
// 2. Use the concat method to combine the two arrays into a new array.
// 3. Print both the original arrays and the combined array using console.log().


var fruits = ['Apple','Orange','Banana','Mango'];
var vegetables =  ["Carrot", "Broccoli", "Spinach", "Tomato"];


var combinedArray = fruits.concat(vegetables);

// console.log(combinedArray);

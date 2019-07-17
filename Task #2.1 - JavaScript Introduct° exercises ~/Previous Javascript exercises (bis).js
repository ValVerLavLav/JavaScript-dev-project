// I - JavaScript Basics
// Exercise 1: In your JavaScript file create a variable called myName with your name as the value.
// Put your name inside string quotes, e.g., "my name".
// Then add a line of code to print the variable name to the console after the previous message.



// Exercise 2: Create a variable called age with a number that is your age. Do not use string quotes for numbers.



// Exercise 3: Create a variable called ignasiAge with a value 32.
// Create another variable called ageDiff and set it to an expression that calculates your age minus Ignasi's age.  Print the value of ageDiff.



// Exercise 4: Write a conditional that compares the variable with your age with the number 21.
// It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age



// Exercise 5: Write a conditional that compares your age with Ignasi's age.
// This conditional will need to test if you are older, younger, or the same age, and print, appropriately, either "Ignasi is older than you",
// Ignasi is younger than you", or "You have the same age as Ignasi".



// -----------------------------------------------------------------------------------------------------------------------------
// II - JavaScript Array Functions

// Exercise 1.1 - Create an array with all the names osf your class (including mentors)
// Print the first element of the array in the console
// =====> PASSED
var WebDevNames = ["Eftaris","Kim","Alex","Laura","Arya","David","Viola","Valéry","Juan","Pol"];
WebDevNames.sort();
WebDevNames[0];



// Exercise 1.2 - Print the last element of the array in the console
// =====> PASSED
var WebDevNames = ["Eftaris","Kim","Alex","Laura","Arya","David","Viola","Valéry","Juan","Pol"];
WebDevNames.sort();
WebDevNames[WebDevNames.length-1];



// Exercise 1.3 - Print all the elements of the array in the console
// =====> PASSED
// (Ok if '(10)' displayed in front?)
var WebDevNames = ["Eftaris","Kim","Alex","Laura","Arya","David","Viola","Valéry","Juan","Pol"];
WebDevNames.sort();
WebDevNames;



// Exercise 1.4 - Print all the elements of the array in the console. Use a "for" loop.
// =====> PASSED
var WebDevNames = ["Eftaris","Kim","Alex","Laura","Arya","David","Viola","Valéry","Juan","Pol"];
WebDevNames.sort();
for (let i = 0; i < WebDevNames.length; i++) {
    console.log(WebDevNames[i]);
}



// Exercise 2: Create an array with all the ages of the students in your class.
var WDAges = [34,33,46,26];

// Exercise 2.1: Iterate the array using a while loop, and then print every age in the console
// =====> PASSED
var WDAges = [34,33,46,26];
let i = 0;
while (i < WDAges.length) {
  console.log(WDAges[i]);
  i++;
}



// Exercise 2.2: Add a conditional inside the while loop to only print even numbers.
// PASSED
var WDAges = [34,33,46,26];
i = 0;
while (i < WDAges.length) {
  if (WDAges[i] % 2 === 0) {
    console.log(WDAges[i]);
    i++;
}
else {
  i++;
}
}



// Exercise 2.3: Change the loop to use a "for" loop instead of a "while" loop.
// =====> PASSED
var WDAges = [34,33,46,26];
for (let i = 0; i < WDAges.length; i++) {
  if (WDAges[i] % 2 === 0) {
    console.log(WDAges[i]);
}
}



// Exercise 3: Write a function which receives an array as a parameter and prints the lowest number in the array to the console.
// =====> FAILED
funtion Exercise3([34,33,46,26]) {
  let minValue = Exercise3.values.min();
  console.log(minValue);
}



// Exercise 4: Write a function which receives an array as a parameter and prints the biggest number in the array to the console.
// =====> FAILED
funtion Exercise4([34,33,46,26]) {
  let maxValue = Exercise4.values.max();
  console.log(maxValue);
}


// Exercise 5: Write a function which receives two parameters, an array and an index.  The function will print the value of the element at the given position (one-based) to the console.
// =====> FAILED
var ArrayExercise5 = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var IndexExercise5 = 1;
funtion Exercise5(ArrayExercise5,IndexExercise5) {
  console.log(ArrayExercise5[IndexExercise5]);
}



// Exercise 6: Write a function which receives an array and only prints the values that repeat.
// =====> FAILED
var ArrayExercise6 = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
ArrayExercise6.sort();
var results = [];
i = 0;
function DuplicatedValues (ArrayExercise6,results) {
  while (i < ArrayExercise6.length - 1) {
    if (ArrayExercise6[i + 1] == ArrayExercise6[i]) {
      results.push(ArrayExercise6[i]);
    i++;
}
}
}
console.log(results)



// Exercise 7: Write a simple JavaScript function to join all elements of the following array into a string.
// =====> PASSED
let myColor = ["Red", "Green", "White", "Black"];
myColor.join(", ");



// -----------------------------------------------------------------------------------------------------------------------------
// III - JavaScript String Functions

// Exercise 1 : Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423.
// =====> PASSED
let ScriptNumberExercise1 = [123456];
function reverse_a_number(ScriptNumberExercise1)
{
	ScriptNumberExercise1 = ScriptNumberExercise1 + "";
	return ScriptNumberExercise1.split("").reverse().join("");
}
console.log(reverse_a_number(ScriptNumberExercise1));



// Exercise 2: Write a JavaScript function that returns a string in alphabetical order.
// For example, if x = 'webmaster' then the output should be 'abeemrstw'.
// Punctuation and numbers aren't passed in the string.
// =====> FAILED
let StringExercise2 = ["webdeveloper"];
function alphabet_order(StringExercise2)
  {
return StringExercise2.split('').sort().join('');
  }
console.log(alphabet_order(StringExercise2));



// Exercise 3: Write a JavaScript function that converts the first letter of every word to uppercase.
// For example, if x = "prince of persia" then the output should be "Prince Of Persia".
let StringExercise3 = ["valery loves web development"]
var firstLetter = StringExercise3.charAt(0);
var uppercaseFirstLetter = StringExercise3.charAt(0).toUpperCase();
var stringWithoutFirstLetter = StringExercise3.slice(1);
function capitalizeFirstLetter(StringExercise3)
{
    return StringExercise3.charAt(0).toUpperCase() + StringExercise3.slice(1);
}



// Exercise 4: Write a JavaScript function that finds the longest word in a phrase.
// For example, if x = "Web Development Tutorial", then the output should be "Development".
let StringExercise3 = ["valery loves Mary Poppins supercalifragilisticexpialidocious"]
var StringExercise3Split = StringExercise3.split(' ');
var longestWord = 0;
for (var i = 0; i < StringExercise3Split.length; i++){
  if (StringExercise3Split[i].length > longestWord){
    longestWord = StringExercise3Split[i].length;
}
}










// -----------------------------------------------------------------------------------------------------------------------------


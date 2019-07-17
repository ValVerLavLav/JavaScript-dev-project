// ====================================================================================================
// What is Javascript?
// ====================================================================================================

// In this document, curly braces { } indicate required variables. Square brackets [ ] indicate optional parameters or placeholders.

// Zero-based counting is standard in programming.

// 0 is the additive identity.
// 1 is the multiplicative identity.


// Basically, with JavaScript on a web page, you can do anything you can do in any other programming language, with one exception.
// JavaScript in a web page is not allow to read or write files on your computer.
// It is prevented from doing that so that hackers can't write web pages that steal information from you or damage your computer files.

// Many new methods are being added to JavaScript, especially for arrays, but some are not available in older browsers, unless you load additional libraries.



// 1 - What is a string?
// ------------------------------------------------------------------------------------------------

// Using + with a string is a shorthand way to convert strings to numbers. 



// * - What is the modulus operator?
// x % 2 returns the remainder of x divided by 2, so x % 2 === 0 tests to see if that remainder is 0, i.e., x is even.




// * - What are the Javascript command?



// ====================================================================================================
// 2 - What is a list?  What is an array?
// ====================================================================================================


//  2.1 - What is the difference between a list and an array?
// ------------------------------------------------------------------------------------------------
// Lists allow only sequential access.
// Arrays allow both direct access and sequential access.
// This is due to the way that these data structures are stored in memory.



// How to Create an Array?
// To create an empty array, use [].
// To create an array with some initial data, use [ item, item, ... ].





//  2.1 - What are array operators?
// ------------------------------------------------------------------------------------------------


var {name-of-variable} = ["01st-element-of-array", "02nd-element-of-array", "03rd-element-of-array", ...etc...];
// Set an element of the array

array[n]
// Get the Nth element of the array
// Indexing is zero-based, i.e., the first element is element 0
// If the index is out of range, undefined is returned.

["my", "first", "array"][0] returns "my"
["my", "first", "array"][2] returns "array"
["my", "first", "array"][3] returns undefined



lst[1] = "second";
// Modifies the second element of the array





//  2.2 - What are array methods?
// ------------------------------------------------------------------------------------------------

{denomination_of_array}.length
// to know how many elements an array has

{denomination_of_array}.push(value)
// to add an item to the end of the array
// length of the modified array

{denomination_of_array}.indexOf(value)
// Check if array has this value
// If it finds something equal, it returns the index, zero-based.
// If it doesn't find anything, it returns -1.

{denomination_of_array}.join("{separator}")
// This concatenates every element into one string, separated by the separator string.
// A common separator string is ", ".

{denomination_of_array}.split("{separator}")
// The split() method is used to split a string into an array of substrings, and returns the new array.





//  2.3 - How to sort arrays?
// ------------------------------------------------------------------------------------------------

// Most methods do not modify array, except push()

sort()
// does an in-place sort. That means it changes the order of elements in the array to be sorted.

names.sort();
// This command sorts arrays of strings



// Sort arrays of numbers


grades.sort(function(x, y) { return x.name.localeCompare(y.name); })
// Sort mixed arrays of strings and numbers in ascending order

grades.sort(function(x, y) { return y.name.localeCompare(x.name); })
// Sort mixed arrays of strings and numbers in descending order






// ====================================================================================================
// 3 - What is a function?
// ====================================================================================================


// 3.2.2 - What are arrow functions?
var hyp = (01st_parameter, 02nd_parameter) => Math.sqrt(01st_parameter*01st_parameter + 02nd_parameter*02nd_parameter);
// The most common "arrow" syntax is variable-list => return-value. 





// ====================================================================================================
// 4 - What is a loop?
// ====================================================================================================
// Loops offer a quick and easy way to do something repeatedly.


//  4.1 - What is looping over arrays?  What is looping over lists?  What are the array functions?
// ------------------------------------------------------------------------------------------------

// Many of the loops you write are iterations over arrays.
// Most loops you write will be over lists of data


// What is the fill method?
fill()


//     4.1.1 - What is the map method?
map()
// The map() method creates a new array with the results of calling a function for every array element.
// It calls the provided function once for each element in an array, in order.
// It does not execute the function for array elements without values.

list.map(function)
// The result of the map() call is a list of the values returned by the function.
// It passes the function the element and the index (zero-based) of that element.

[1, 2, 3, 4, 5].map(function(x) { return x*x; });
// Take an array of numbers and return a list of the squares of those numbers




//     4.1.1 - What is the filter method?
filter(function)
// It collects specific elements of the array.
// It calls the function for every element. If the function returns true, the element is collected. If the function returns false, the element is skipped.

[5, -2, 8, 7, -10, -3, 4].filter(function(x) { return x >= 0; });
// This code will return a list of all the non-negative numbers.



//     4.1.1 - What is the some method?
some(function)
// It calls the function for every element of the array.
// If the function returns true for any element, it returns true. Otherwise, it returns false.
// As soon as the function is true, it stops and returns true.

[5, -2, 8, 7, -10, -3, 4].some(function(x) { return x < 0; });
// It returns true if any element is negative



//     4.1.1 - What is the every method?
every(function)
// It calls the function for every element of the array.
// If the function returns true for every element, every() returns true. Otherwise, every() returns false.

[5, -2, 8, 7, -10, -3, 4].every(function(x) { return x < 0; });
// It will return only if all elements are negative.



//     4.1.1 - What is the reduce method?
reduce()
// The reduce () method reduces the array to a single value.
// This method executes a provided function for each value of the array from left-to-right.
// The return value of the function is stored in an accumulator (result/total).

list.reduce(function, initial-value)
// For each element of the array 'list', it calls function with three arguments:
// *The 'accumulator', which holds the result so far
// *The current element
// *The current element's zero-based index

// The value of the 'accumulator' is
// *for the first element, the 'initial-value', and
// *for the remaining elements, the value returned by 'function' for the previous element.

// When the loop finishes, the final value of the accumulator is returned.


[1, 2, 3, 4, 5].reduce(function(v, x) { return (x % 2 === 0) ? v + x : v }, 0);
// Add only the even numbers



//     4.1.1 - What is the join method?
join()
// It combines all the elements of a list into a single string.
// It takes one parameter, which should be the string to use in between the joined elements.

[1, 2, 3].join(",");
// It returns the string "1,2,3".

["a","e","i","o","u"].join("");
// It returns the string "aeiou".



typeof;
// The typeof operator returns a string indicating the type of the unevaluated operand
console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof declaredButUndefinedVariable);
// expected output: "undefined";













//  4.* - What is 'higher-order functional programming'?
// ------------------------------------------------------------------------------------------------

// map() and reduce() methods take functions are [as?] arguments. 

function addArrays(a, b) {
  var lst = [];
  var len = Math.min(a.length, b.length);
  for (var i = 0; i < len; ++i) {
    lst.push(a[i] + b[i]);
  }
  return lst;
}
// Take two arrays and return a new array that is as long as the shortest of the two arrays, and contains the sum of the corresponding elements

function mapArrays(fn, a, b) {
  var lst = [];
  var len = Math.min(a.length, b.length);
  for (var i = 0; i < len; ++i) {
    lst.push(fn(a[i], b[i]));
  }
  return lst;
}
// Defines a function that takes the function to apply to the two arrays.
// Parameter variable 'fn' is assumed to be a function of two arguments.



//  4.2 - How to scan anything else than a list?  How to loop over anything else than a list?
// ------------------------------------------------------------------------------------------------

//     4.2.1 - What is the more primitive 'for' loop?
// It is a numeric iteration, i.e., doing something N times.

for ([initialExpression]; [condition]; [incrementExpression])
  { statements; }
// The initializing expression initialExpression, if any, is execute.


// Nested 'for' loops come up whenever you have two-dimensional data.





//     4.2.2 - What is the more primitive 'while' loop?
while (condition)
  {statement}

// The while first checks the 'condition'.
// If it returns a true value, then it executes the 'statement' and goes back to check the condition.
// The loop will continue until some statement does something to make the condition ncheck return a false value.
// In JavaScript, false means false, 0, null, undefined, NaN, or an empty string.






function getNumber(msg) {
  var answer = prompt(msg);
  return answer == null ? -1 : + answer;
 }



 function getNumbers() {
  var numbers = [];
  var number = getNumber('Enter a lottery number');
  while (number > 0) {
    numbers.push(number);
    number = getNumber('Enter another number, or 0 to stop, or Cancel to cancel all numbers');
  }
  if (number === -1) {
    return [];
  }
  else {
    return numbers;
  }
}
// This code does not store the user's final entry in the list of numbers





// ====================================================================================================
// * - What is a string funct°?
// ====================================================================================================





// ====================================================================================================
// * - 
// ====================================================================================================















// TBI
console.log("Starting javascript...")


var {variable-1} = prompt('{Question requesting the value of the first variable}'); var {variable-2} = prompt('{Question requesting the value of the second variable}'); alert {variable-1}+'{Whatever you want to have displayed between the two variables}'+{variable-2};

var {name} = '{string}'
var {name} = [{1st element}, {2nd element}, {3rd element}, {4th element}, {5th element}, ...etc...]


// Conditional coding
if (test) {
    code
}


if (numbers.indexOf(n) === -1) {
    numbers.push(n);
  }
// Add a number to an array of numbers, only when it is not already in that array



if (test) {
    then-code
  }
  else {
    else-code
  }


  function getGreeting(person) {
    if (person.friend) {
      return "Dear " + person.firstName + ","
    }
    else {
      return "Dear " + person.title + " " + person.firstName + " " + person.lastName + ",";
    }
  }




  if (test1) {
    code1
  }
  else if (test2) {
    code2
  }
  else if (test3) {
    code3
  }
    ...
  else {
    code when no test is true
  }

//  Conditional operator
  function getGameResult(score1, score2) {
    if (score1 > score2) {
      return 'You win!';
    }
    else if (score1 < score2) {
      return 'You lose!';
    }
    else {
      return 'It was a tie!';
    }
  }

//  test ? then-value : else-value
  function getGameResult(score1, score2) {
    return (score1 > score2) ? 'You win!' 
      : (score1 < score2) ? 'You lost!'
      : 'It was a tie!';
  }

// Boolean expression
// Either true or false
function isAdult(person) {
    return person.age >= 21;
}

// Test if array > one element
function isIndexable(lst) {
    return Array.isArray(lst) && lst.length > 0
}


// let age = 30;
// const name = 
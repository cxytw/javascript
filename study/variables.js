// JavaScript Variables
// It is considered good programming practice to always declare variables before use.
var x = 5;
var y = 6;
var z = x + y;
// The var keyword was used in all JavaScript code from 1995 to 2015.
// The let and const keywords were added to JavaScript in 2015.
// The var keyword should only be used in code written for older browsers.

const price1 = 5;
const price2 = 6;
let total = price1 + price2;
/* document.getElementById("demo").innerHTML =
"The total is: " + total; */

// When to Use var, let, or const?
// 1. Always declare variables
// 2. Always use const if the value should not be changed
// 3. Always use const if the type should not be changed (Arrays and Objects)
// 4. Only use let if you can't use const
// 5. Only use var if you MUST support old browsers.


// Just Like Algebra 代數
// Just like in algebra, variables hold values:
let x = 5;
let y = 6;
// Just like in algebra, variables are used in expressions:
let z = x + y;
// Variables are containers for storing values. 儲存值


// JavaScript Identifiers 標識符
// All JavaScript variables must be identified with unique names.
// These unique names are called identifiers.
// Identifiers can be short names (like x and y) or more descriptive names 描述性名稱(age, sum, totalVolume).
/*
The general rules for constructing names for variables (unique identifiers) are:
Names can contain letters英文字母, digits數字, underscores底線, and dollar signs錢號.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words 保留字(like JavaScript keywords) cannot be used as names.
*/


// The Assignment Operator 賦值運算符
// In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.
x = x + 5 // x += 5
// In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.
// It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.
// Notes: The "equal to" operator is written like == in JavaScript.


// JavaScript Data Types
// JavaScript variables can hold numbers like 100 and text values like "John Doe".
// In programming, text values are called text strings.
// JavaScript can handle many types of data, but for now, just think of numbers and strings.
// Strings are written inside double or single quotes. Numbers are written without quotes.
// If you put a number in quotes, it will be treated as a text string.
const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';


// Declaring a JavaScript Variable 宣告變數
// Creating a variable in JavaScript is called "declaring" a variable.
// You declare a JavaScript variable with the var or the let keyword:
let carName;
// After the declaration, the variable has no value (technically it is undefined).
// To assign a value to the variable, use the equal sign:
carName = "Volvo";
// You can also assign a value to the variable when you declare it:
let catName = "Volvo";
// n the example below, we create a variable called catName and assign the value "Volvo" to it.


// One Statement, Many Variables
// You can declare many variables in one statement.
// Start the statement with let and separate the variables by comma:
let p = "John Doe", c = "Volvo", price = 200;
// A declaration can span multiple lines:
let pa = "John Doe",
ca = "Volvo",
pricetag = 200;


// Value = undefined
/*
In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.
A variable declared without a value will have the value undefined.
The variable carName will have the value undefined after the execution of this statement:
let carName;
*/


// Re-Declaring JavaScript Variables 重新宣告變數
/*
If you re-declare a JavaScript variable declared with var, it will not lose its value.
The variable carName will still have the value "Volvo" after the execution of these statements:
var carName = "Volvo";
var carName;
*/
/*
You cannot re-declare a variable declared with let or const.
This will not work:

let carName = "Volvo";
let carName;
*/


// JavaScript Arithmetic
let x = 5 + 2 + 3;
// You can also add strings, but strings will be concatenated:
let x = "John" + " " + "Doe";
// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let x = "5" + 2 + 3;


// JavaScript Dollar Sign $
// Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
/*
Using the dollar sign is not very common in JavaScript,
but professional programmers often use it as an alias for the main function in a JavaScript library.

In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements.
In jQuery $("p"); means "select all p elements".
*/


// JavaScript Underscore (_)底線
// Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
/*
Using the underscore is not very common in JavaScript,
but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.
*/
// JavaScript Let

// Block Scope 區域作用域 (let, const)
/* 
Before ES6 (2015), JavaScript did not have Block Scope.
JavaScript had Global Scope and Function Scope.
ES6 introduced the two new JavaScript keywords: let and const.
These two keywords provided Block Scope in JavaScript.
*/

// Variables declared inside a { } block cannot be accessed from outside the block:
{
    let xxx = 2;
}
// Here cannot access(read & write).
// Access example: let y = xxx; // read xxx
// Access example: xxx += 3; // write xxx
// xxx can NOT be used here


// Global Scope 全域作用域 (var)
/*
Variables declared with the var always have Global Scope.
Variables declared with the var keyword can NOT have block scope.
Variables declared with varinside a { } block can be accessed from outside the block.
*/
{
    var x = 2;
}
// x CAN be used here
console.log("Accessing variable x (var):", x);


// Let Cannot be Redeclared 不可重複宣告
// Variables defined with let can not be redeclared.
// You can not accidentally redeclare a variable declared with let.
/* With let you can not do this:
let y = "John";
let y = 10;
*/
// Variables defined with var can be redeclared.
var z = "John Doe";
var z = 0;
console.log("Accessing variable z (var, redeclared):", z); // 0


// Redeclaring Variables 重新宣告變數
/*
Redeclaring a variable using the var keyword can impose problems.
Redeclaring a variable inside a block will also redeclare the variable outside the block.
*/

console.log("Accessing variable c (var, before declared)", c);
var c = 10;
console.log("Accessing variable c (var, after declared)", c);
// Here c is 10
{
    var c = 2;
    // Here c is 2
}
// Here c is 2

/*
Redeclaring a variable using the let keyword can solve this problem.
Redeclaring a variable inside a block will not redeclare the variable outside the block.
*/

let e = 10;
// Here e is 10

{
    let e = 2;
    console.log("Accessing variable e (let, inner scope)", e); // Here e is 2
}
console.log("Accessing variable e (let, outer scope)", e); // Here e is 10


// What is Good?
/*
let and const have block scope.
let and const can not be redeclared in the same scope.
let and const must be declared before use.
let and const does not bind to this.
let and const are not hoisted.
*/


// What is Not Good?
/*
var does not have to be declared.
var is hoisted. 
var binds to this.
*/


// Browser Support 瀏覽器支援
// The let and const keywords are not supported in Internet Explorer 11 or earlier.


// Redeclaring 重複宣告
// Redeclaring a JavaScript variable with var is allowed anywhere in a program.
var d = 2;
console.log("Declare d with var d = 2; d is:", d);
// Now d is 2
var d = 3;
console.log("Declare d with var d = 3; d is:", d);
// Now d is 3

// With let, redeclaring a variable in the same block is NOT allowed.
/*
var f = 2;   // Allowed
let f = 3;   // Not allowed
*/
/*
{
let i = 2;   // Allowed
let i = 3;   // Not allowed
}
*/
/*
{
let j = 2;   // Allowed
var j = 3;   // Not allowed
}
*/

// Redeclaring a variable with let, in another block, IS allowed.
let j = 2; // Allowed
{
    let j = 3; // Allowed
}
{
    let j = 4; // Allowed
}


// Let Hoisting
// Variables defined with var are hoisted to the top and can be initialized at any time.
// Meaning: You can use the variable before it is declared:
carName = "Volvo";
var carName;

// Meaning: Using a let variable before it is declared will result in a ReferenceError:
/*
carName = "Saab";
let carName = "Volvo";
*/
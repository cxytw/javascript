// JavaScript Const
/*
Variables defined with const cannot be Redeclared.
Variables defined with const cannot be Reassigned.
Variables defined with const have Block Scope.
*/


// Cannot be Reassigned
// A variable defined with the const keyword cannot be reassigned:
/*
const PI = 3.141592653589793;
PI = 3.14;      //TypeError: Assignment to constant variable.
*/
/*
const PI = 3.141592653589793;
PI = PI + 10;   //TypeError: Assignment to constant variable.
*/


// Must be Assigned
// JavaScript const variables must be assigned a value when they are declared:
const PI = 3.14159265359; // Right declaration.
/*
const PI; // SyntaxError: Missing initializer初始化 in const declaration
PI = 3.14159265359;
*/


// When to use JavaScript const?
// Always declare a variable with const when you know that the value should not be changed.
/*
Use const when you declare:
A new Array陣列
A new Object物件
A new Function函數
A new RegExp正規表達式
*/


// Constant Objects and Arrays
// The keyword const is a little misleading.
// It does not define a constant value. It defines a constant reference to a value.
/*
Because of this you can NOT:
Reassign a constant value
Reassign a constant array
Reassign a constant object

But you CAN:
Change the elements of constant array
Change the properties of constant object
*/


// Constant Arrays
// You can change the elements of a constant array:
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
console.log("Accessing variable cars (const):", cars);
// You can change an element:
cars[0] = "Toyota";
console.log("Change the 1st element in array:", cars);
// You can add an element:
cars.push("Audi");
console.log("Add a new element in array:", cars);

// But you can NOT reassign the array:
/*
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // TypeError: Assignment to constant variable.
*/


// Constant Objects
// You can change the properties of a constant object:
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};
console.log("Accessing variable car (const):", car);
// You can change a property:
car.color = "red";
console.log("Change the property in array:", car);
// You can add a property:
car.owner = "Johnson";
console.log("Add a new property in array:", car);

// But you can NOT reassign the object:
/*
const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // TypeError: Assignment to constant variable.
*/


// Difference Between var, let and const
/*
        Scope  Redeclare  Reassign  Hoisted  Binds this
var	    No	   Yes	      Yes	    Yes	     Yes
let	    Yes	   No	      Yes       No	     No
const   Yes	   No	      No	    No	     No
*/


// What is Good?
/*
let and const have block scope.
let and const can not be redeclared.
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


// Browser Support
// The let and const keywords are not supported in Internet Explorer 11 or earlier.


// Block Scope
// Declaring a variable with const is similar to let when it comes to Block Scope.
// The x declared in the block, in this example, is not the same as the x declared outside the block:
const x = 10;
console.log("Accessing variable x (const):", x);
{
    const x = 2;
    console.log("Accessing variable x in the block (const):", x);
}
console.log("The outer variable x (const):", x);
// Here x is 10


// Redeclaring
// Redeclaring an existing var or let variable to const, in the same scope, is not allowed:
/*
var y = 2;     // Allowed
const y = 3;   // Not allowed // SyntaxError: Identifier 'y' has already been declared
console.log("Reassigned variable x (const)", x )
*/
/*  
{
    let z = 2;     // Allowed
    const z = 2;   // Not allowed // SyntaxError: Identifier 'z' has already been declared
    console.log("Reassigned variable z (const)", z )
}
*/
/*
{
    const o = 2;   // Allowed
    const o = 2;   // Not allowed // SyntaxError: Identifier 'o' has already been declared
}
*/

// Reassigning an existing const variable, in the same scope, is not allowed:
/* 
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed // Variable has already been declared with const, so it can't be reassigned again.
  var x = 2;     // Not allowed // Variable X has already been declared.
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}
*/

// Redeclaring a variable with const, in another scope, or in another block, is allowed:
const c = 2;       // Allowed
console.log("Accessing variable c (const):", c);
{
  const c = 3;   // Allowed
  console.log("Accessing variable c in the 1st block (const):", c);
}
{
  const c = 4;   // Allowed
  console.log("Accessing variable c in the 2nd block (const):", c);
}
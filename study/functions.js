// JavaScript Functions
// A JavaScript function is a block of code that performs a specific task when called.

// Call a function which performs a calculation and returns the result.
function myFunction(p1, p2) {
    return p1*p2;
}
let result = myFunction(4,3)
console.log("Call myFunction", result);


// JavaScript Function Syntax 函數語法
/* A JavaScript function is defined using the "function" keyword, followed by a name, parentheses括號 for parameters參數, and code inside curly brackets花括弧.
    - Function parameters are listed inside the parentheses () in the function definition.
    - Function arguments are the values received by the function when it is invoked呼叫.
    - Inside the function, the arguments (the parameters) behave as local variables. 在函數內部，參數（參數）表現為局部變數。
*/
function name(parameter1, parameter2, parameter3) {
    // code to be executed
}


// Function Invocation 呼叫函數
/*
The code inside the function will execute when "something" invokes (calls) the function:
    - When an event occurs (when a user clicks a button)
    - When it is invoked (called) from JavaScript code
    - Automatically (self invoked)
*/


// Function Return 函數回傳
/*
When JavaScript hits a return statement,
the function stops and sends a result back to where it was called,
allowing the rest of the code to continue.
*/
function mySecondFunction(a, b) {
    // Calculating a + b with a = 4, b = 3
    return a + b;
}
let x = mySecondFunction(4, 3);
console.log("Function returns the value of a + b:", x);


// Why use Functions?
// Functions allow you to reuse code, enabling you to use the same code with different arguments to get different results.


// The () Operator
// Invoke (call) a function that converts from Fahrenheit to Celsius:
function toCelsius(f) {
    return (5/9) * (f-32);
}
let value = toCelsius(77);
console.log("Converts 77°F to Celsius:", value);

// Accessing a function with incorrect parameters will return an incorrect answer.

function toCelius2(f) {
    return (5/9) * (f-32);
}
let value2 = toCelius2();
console.log("Converts '' to Celsius:", value2);


// Accessing a function without () returns the function, not the function result.
function toCelsius(f) {
    return (5/9) * (f-32);
}
let value3 = toCelsius;
console.log(value3(100));
// toCelsius: function object.
// toCelsius(): function result.


// Functions Used as Variable Values
let text = "The temperature is " + toCelsius(77) + " Celsius.";

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
console.log("Using a function as a variable:", text);


// Local Variables
// Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables can only be accessed from within the function.
// code here can NOT use carName

function myFunction3() {
    let carName = "Volvo";
    // code here CAN use carName
    console.log("Inside:", carName);
  }
let text2 = myFunction3();
// code here can NOT use carName
// console.log("Outside:", carName); // not defined

// Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
// Local variables are created when a function starts, and deleted when the function is completed.

// 小練習：計算三角形最長邊
function calculateHypotenuse(a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
}
let hypotenuse = calculateHypotenuse(3, 4);
console.log("Hypotenuse:", hypotenuse);
// JavaScript Functions
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it). 當「某物」呼叫它時，JavaScript 函數就會執行。

// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
  }
let result = myFunction(4, 3);
console.log("Call a function which performs a calculation and returns the result:", result);


// JavaScript Function Syntax 函數語法
/*
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)
The code to be executed, by the function, is placed inside curly brackets: {}

JavaScript 函數用 function 關鍵字、後面接名稱、括號 () 來定義。
函數名稱可以包含字母、數字、底線和美元符號（與變數相同的規則）。
括號中可以包含用逗號分隔的參數名稱：
（參數1，參數2，...）
函數要執行的程式碼放在花括號內：{}
*/

function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }
// Function parameters參數 are listed inside the parentheses括號 () in the function definition.
// Function arguments are the values received by the function when it is invoked.
// Inside the function, the arguments (the parameters) behave as local variables.


// Function Invocation 函數呼叫
/*
The code inside the function will execute when "something" invokes (calls) the function:
    - When an event occurs (when a user clicks a button)
    - When it is invoked (called) from JavaScript code
    - Automatically (self invoked)
*/


// Function Return
/*
When JavaScript reaches a return statement, the function will stop executing.
If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
Functions often compute a return value. The return value is "returned" back to the "caller":
*/
function myFunction(a, b) {
    return a * b;
  }


// Why Functions?
/*
With functions you can reuse code
You can write code that can be used many times.
You can use the same code with different arguments, to produce different results.
*/


// The () Operator
// The () operator invokes (calls) the function:
// Convert Fahrenheit to Celsius:
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);

// Accessing a function with incorrect parameters can return an incorrect answer:
function toCelsius2(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value2 = toCelsius2();

// Accessing a function without () returns the function and not the function result:
function toCelsius3(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value3 = toCelsius3;

// Note
// As you see from the examples above, toCelsius refers to the function object, and toCelsius() refers to the function result.


// Functions Used as Variable Values
// Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.
// Instead of using a variable to store the return value of a function:
let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";
// You can use the function directly, as a variable value:
let text2 = "The temperature is " + toCelsius(77) + " Celsius";


// Local Variables
// Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables can only be accessed from within the function.
// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
// code here can NOT use carName

/*
Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
Local variables are created when a function starts, and deleted when the function is completed.
*/
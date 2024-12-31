// JavaScript Statements 語句

//JavaScript statements are composed of:Values, Operators, Expressions, Keywords, and Comments.
// document.getElementById("demo").innerHTML = "Hello World.";


// Semicolons 分號
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c
// When separated by semicolons, multiple statements on one line are allowed:
a = 5; b = 6; c = a + b;


// JavaScript White Space
// JavaScript ignores multiple spaces. Add white space to your script to make it more readable.
let person = "Hege";
let human="Hege";
// A good practice is to put spaces around operators 運算符號 ( = + - * / ) 
let x = y + z;


// JavaScript Line Length and Line Breaks
// For best readability, programmers often like to avoid code lines longer than 80 characters.
// If a JavaScript statement does not fit on one line, the best place to break it is after an operator:
document.getElementById("demo").innerHTML =
"Hello Dolly!";

// JavaScript Code Blocks
// JavaScript statements can be grouped together in code blocks, inside curly brackets 大括號 {...}.
function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
  }
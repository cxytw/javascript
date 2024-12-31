// JavaScript Comments 註解

// Single Line Comments 單行註解
// Single line comments start with //.
// Any text between // and the end of the line will be ignored(被忽略) by JavaScript (will not be executed 執行).

// Example: Change paragraph or heading:
document.getElementById("myH").innerHTML = "My First Page";
// Use a single line comment at the end of each line to explain the code:
let x = 5;      // Declare x, give it the value of 5
let y = x + 2;  // Declare y, give it the value of x + 2


// Multi-line Comments 多行註解
// Multi-line comments start with /* and end with */. Any text between /* and */ will be ignored by JavaScript.
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";

// Using Comments to Prevent Execution
// Adding // in front of a code line changes the code lines from an executable line to a comment.
//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
// or
/*
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
*/


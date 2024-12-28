// Javascript Syntax 語法
// JavaScript Values
/*
The JavaScript syntax defines two types of values:

1. Fixed values
2. Variable values

Fixed values are called Literals. 固定值稱為文字。
Variable values are called Variables. 變數值稱為變數。
*/


// JavaScript Literals 文字
// Numbers are written with or without decimals(小數):
// 10.50 floating number
// 1001 integer

// Strings are text, written within double or single quotes(引號):
// "John Doe"
// 'Johb Doe' 


// Explanation by ChatGPT
let char1 = 'A';  // 單引號，表示一個字元
let char2 = "B";  // 雙引號，也可以表示一個字元
let str = "Hello"; // 雙引號，表示一個字串
let str2 = 'World'; // 單引號，表示一個字串

// JavaScript Variables 變數
// In a programming language, variables are used to store(儲存) data values.
// JavaScript uses the keywords "var, let and const" to declare variables(宣告變數).
// An equal sign(等號) is used to assign values(賦值) to variables.
let x; // x is declared as a variable
x = 6; // x is assigned (given) the value 6


// JavaScript Operators 運算符號
// JavaScript uses arithmetic(算數) operators ( + - * / ) to compute(計算) values:
// (5 + 6) * 10
// JavaScript uses an assignment(賦值) operator ( = ) to assign values to variables:
let h, i;
h = 5;
i = 6;


// JavaScript Expressions 表達式
// An expression is a combination of values, variables, and operators, which computes to a value.
// The computation is called an evaluation.
// 5 * 10
// x * 10 // Expressions can also contain variable values:
// The values can be of various types, such as numbers and strings.
// "John" + " " + "Doe" // evaluates to "John Doe":


// 讓JavaScript在執行的時候，知道這個關鍵字、用來聲明變數
let d, e;
d = 5 + 6;
e = x * 10;


// JavaScript Comments 註解
// Not all JavaScript statements are "executed".
// Code after double slashes // or between /* and */ is treated as a comment.


// JavaScript Identifiers / Names名稱
// Identifiers are JavaScript names.
/*
1. Identifiers are used to name variables and keywords, and functions.
2. The rules for legal names are the same in most programming languages.
3. A JavaScript name must begin with:
    A letter (A-Z or a-z)
    A dollar sign ($)
    Or an underscore (_)
Subsequent characters may be letters, digits, underscores, or dollar signs.
*/


// JavaScript is Case Sensitive 對大小寫很敏感
// The variables lastName and lastname, are two different variables:
let lastname, lastName;
lastName = "Doe";
lastname = "Peterson";
// JavaScript does not interpret LET or Let as the keyword let.


// JavaScript and Camel Case駝峰大小寫

// Historically, programmers have used different ways of joining multiple words into one variable name:
/* 1. Hyphens:
first-name, last-name, master-card, inter-city.
// Hyphens are not allowed in JavaScript. They are reserved for subtractions.

2. Underscore:
first_name, last_name, master_card, inter_city.
Upper Camel Case (Pascal Case):
FirstName, LastName, MasterCard, InterCity.

3. Lower Camel Case - JavaScript:
JavaScript programmers tend to use camel case that starts with a lowercase letter:
*/
console.log("firstName, lastName, masterCard, interCity")
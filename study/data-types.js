// JavaScript Data Types
/*
JavaScript has 8 Datatypes
String 字串
Number 數字
Bigint 大整數
Boolean 布林值
Undefined 未定義
Null 空值
Symbol 符號
Object 物件

The Object Datatype
The object data type can contain both built-in objects（內建物件）, and user defined objects:

Built-in object types can be:
objects（物件）, arrays（陣列）, dates（日期）, maps（映射）, sets（集合）, intarrays（整數陣列）, floatarrays（浮點數陣列）, promises（承諾）, and more.
*/


// Numbers:
let length = 16;
let weight = 7.5;
console.log(typeof length);

// Strings:
let color = "Yellow";
let lastName = "Johnson";
console.log(typeof color);

// Booleans
let x = true;
let y = false;
console.log(typeof x);
console.log(x, y);

// Object:
const person = {firstName:"John", lastName:"Doe"};
console.log(typeof person);

// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log(typeof cars);

// Date object:
const date = new Date("2022-03-25");
console.log(typeof date);

// A JavaScript variable can hold any type of data. JavaScript 變數可以保存任何類型的資料。

// The Concept of Data Types 資料型態的概念
// In programming, data types is an important concept.
// To be able to operate on variables, it is important to know something about the type.
// Without data types, a computer cannot safely solve this:
let a = 16 + "Volvo";
// Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?
// JavaScript will treat the example above as:
let b = "16" + "Volvo";
console.log("Assigned a value to variable b:", b);
console.log(typeof b);
// When adding a number and a string, JavaScript will treat the number as a string.

let c = "Volvo" + 16;
console.log("Before swapping the order:", c);

c = 16 + "Volvo";
console.log("After swapping the order:", c);

// JavaScript evaluates expressions from left to right.
// JavaScript 在處理表達式時會從左到右依序運算，並根據運算元的類型決定如何操作。
// Different sequences can produce different results:
let d = 16 + 4 + "Volvo"; // The result is: 20Volvo
// JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
let e = "Volvo" + 16 + 4;
// since the first operand is a string, all operands are treated as strings.


// JavaScript Types are Dynamic
// JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
let f;       // Now x is undefined
console.log(typeof f);
f = 5;       // Now x is a Number
console.log("Asssigned value variable f(5):", typeof f);
f = "John";  // Now x is a String
console.log("Reassigned value variable f(John):", typeof f);


// JavaScript Strings
// A string (or a text string) is a series of characters like "John Doe".
// Strings are written with quotes. You can use single or double quotes.
// Using double quotes:
let carName1 = "Volvo XC60";
// Using single quotes:
let carName2 = 'Volvo XC60';
console.log("Compare single and double quotes:", carName1, carName2);

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string.
// 可以在字串中使用引號，只要它們不與字串周圍的引號相符即可。
// Single quote inside double quotes:
let answer1 = "It's alright";
// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";
// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';


// JavaScript Numbers
// All JavaScript numbers are stored as decimal numbers (floating point). 所有數字都是以十進位儲存的（浮點數）
// Numbers can be written with, or without decimals. 數字可以有小數點，也可以沒有小數點
// With decimals:
let x1 = 34.00;
console.log("Numbers written with decimals", x1);
// Without decimals:
let x2 = 34;
console.log("Numbers written without decimals", x1);


// Exponential Notation 指數表示法
// Extra large or extra small numbers can be written with scientific (exponential) notation. 超大數或超小數可以用科學（指數）表示法表示
let g = 123e5;    // 12300000
let h = 123e-5;   // 0.00123
/*
Most programming languages have many number types:

Whole numbers (integers) 整數型別（整數）:
byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

Real numbers (floating-point) 浮點數型別（浮點數）:
float (32-bit), double (64-bit).

Javascript numbers are always one type:
double (64-bit floating point).
*/


// JavaScript BigInt 超大整數
// All JavaScript numbers are stored in a 64-bit floating-point format.
// JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
let i = BigInt("123456789012345678901234567890");


// JavaScript Booleans 布林值
// Booleans can only have two values: true or false.
let j = 5;
let k = 5;
let l = 6;

(j == k)       
console.log(j == k); // Returns true
(j == l)       
console.log(j == l); // Returns false
// Booleans are often used in conditional testing.


// JavaScript Arrays
// JavaScript arrays are written with square brackets.
// Array items are separated by commas.
// The following code declares (creates) an array called cars, containing three items (car names):
const cars123 = ["Saab", "Volvo", "BMW"];
console.log("Declares (creates) an array called cars, containing three items (car names)", cars123);
// Array indexes are zero-based, which means the first item is [0], second is [1], and so on. 陣列索引從零開始，這意味著第一個項目是 [0]，第二個是 [1]，依此類推。


// JavaScript Objects
// JavaScript objects are written with curly braces {}. 在 JavaScript 中，物件是由大括號 {} 包圍的
// Object properties are written as name:value pairs, separated by commas. 物件的屬性（或稱鍵值對）是由名稱（key）和值（value）組成，並且它們是以冒號 : 來分隔的，不同的鍵值對之間由逗號分隔。
const person1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log("Assigned object(person1) with 4 properties:", person1, typeof person1);
// The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.


// The typeof Operator
// You can use the JavaScript typeof operator to find the type of a JavaScript variable.
// The typeof operator returns the type of a variable or an expression.
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"


// Undefined
// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
// let car;    // Value is undefined, type is undefined
// typeof car;
// Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
car2 = undefined;    // Value is undefined, type is undefined
console.log(car2, typeof car2);


// Empty Values
// An empty value has nothing to do with undefined. 空值並不等同於 undefined
// An empty string has both a legal value and a type. 空字串 "" 是一個合法的字串，它有自己的資料型態（字串型態），但它的內容是空的。
let car3 = "";    // The value is "", the typeof is "string"
console.log(car3, typeof car3); // The value is "", the typeof is "string"
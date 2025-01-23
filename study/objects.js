// Object Properties


// Object Properties
/*
A real life car has properties like weight and color:
car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white.
Car objects have the same properties, but the values differ from car to car.
*/


// Object Methods
/*
A real life car has methods like start and stop:
car.start(), car.drive(), car.brake(), car.stop().
Car objects have the same methods, but the methods are performed at different times.
*/


// JavaScript Variables
// JavaScript variables are containers for data values.
// This code assigns a simple value (Fiat) to a variable named car:
let car = "Fiat";
console.log("Creating a Variable to Car", car);


// JavaScript Objects
// Objects are variables too. But objects can contain many values.
// This code assigns many values (Fiat, 500, white) to an object named car:
const car2 = {type:"Fiat", model:"500", color:"white"};
console.log("The car2 type is", car2.type);


// JavaScript Object Definition
/*
Define a JavaScript Object:
    - Using an Object Literal
    - Using the new Keyword
    - Using an Object Constructor
*/


// JavaScript Object Literal 物件的符號
/*
An object literal is a list of name:value pairs inside curly braces {}.
{firstName:"John", lastName:"Doe", age:"50", eyeColor:"blue"}
*/

// Note:
// name:value pairs are also called key:value pairs. name:value 配對也稱為 key:value 配對。
// object literals are also called object initializers. 物件字面量 (object literals) 也稱為物件初始化器 (object initializers)。
/*
初始化器 (Initializers) 的命名來源
"初始化器" (initializers) 是因為字面量語法直接將屬性賦予初始值，這與初始化的概念一致。
在創建物件的同時設定屬性值，讓物件在誕生時就已完成設置。
*/


// Creating a JavaScript Object
// Create an Object:
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person.firstName + " is " + person.age + " years old.");

// Spaces and line breaks are not important. An object initializer can span multiple lines:
const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
console.log("An object initializer with multiple lines:", person2.firstName + " is " + person2.age + " years old.");

// This example creates an empty JavaScript object, and then adds 4 properties:
// Create an empty Object
const person3 = {};
// Add Properties
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
person3.eyeColor = "blue"; 
console.log("Create an empty JavaScript object, and then adds 4 properties:", person3.firstName + " is " + person3.age + " years old.");


// Using the new Keyword
// This example create a new JavaScript object using new Object(), and then adds 4 properties:
// Create an Object
const person4 = new Object();
person4.firstName = "John";
person4.lastName = "Doe";
person4.age = 50;
person4.eyeColor = "blue"; 
console.log("Create a new object using new Object(), and then adds 4 properties:", person4.firstName + " is " + person4.age + " years old.");

// Note:
/*
The examples above do exactly the same.
But, there is no need to use new Object().
For readability, simplicity and execution speed, use the object literal method.
上面的例子作用完全相同。
但是，不需要使用 new Object()。
為了可讀性、簡單性和執行速度，請使用物件文字方法。
*/


// Object Properties 物件屬性
// The named values in JavaScript objects are called properties.
/*
Property	Value
firstName	John
lastName	Doe
age	        50
eyeColor	blue
*/
/*
Objects written as name value pairs are similar to:

Associative arrays in PHP
Dictionaries in Python
Hash tables in C
Hash maps in Java
Hashes in Ruby and Perl
名稱-值對形式書寫的物件類似於以下結構：

PHP 中的關聯陣列 (Associative arrays)
Python 中的字典 (Dictionaries)
C 中的雜湊表 (Hash tables)
Java 中的雜湊映射 (Hash maps)
Ruby 和 Perl 中的雜湊 (Hashes)
*/


// Accessing Object Properties
// We can access object properties in two ways:
// objectName.propertyName 
console.log('objectName.propertyName:', person.lastName);
// objectName["propertyName"]
console.log('objectName["propertyName"]:', person["lastName"]);


// JavaScript Object Methods
/*
Methods are actions that can be performed on objects.
方法是可以對物件執行的動作。
Methods are function definitions stored as property values.
方法是作為屬性值儲存的函式定義。

Property	Property Value
firstName	John
lastName	Doe
age	        50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}
*/
/*
ChatGPT summarize:
- property 屬性是物件的靜態數據（例如 firstName: "John"）。
- method 方法是物件的動態行為（例如 fullName: function() { return ... }）。
- method 方法的特點是它們用 function 定義，並且可以通過 this 關鍵字存取物件內的其他屬性。
*/

const person5 = {
    firstName: "Mary",
    lastName: "Chen",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName; 
    }
};
console.log("Using the fullName method to get the result:", person5.fullName());
/*
In the example above, this refers to the person object:
this.firstName means the firstName property of person.
this.lastName means the lastName property of person.
*/ 


// In JavaScript, Objects are King.
/*
Objects are containers for Properties and Methods.
物件是用來存放屬性（Properties）和方法（Methods）的容器。

Properties are named Values.
屬性是具名稱的值。

Methods are Functions stored as Properties.
方法是以屬性形式儲存的函式。

Properties can be primitive values, functions, or even other objects.
屬性可以是原始值（Primitive Values）、函式，甚至是其他物件。
*/

/*
In JavaScript, almost "everything" is an object.

Objects are objects
Maths are objects
Functions are objects
Dates are objects
Arrays are objects
Maps are objects
Sets are objects
All JavaScript values, except primitives, are objects.
*/


// JavaScript Primitives 原始值
/*
A primitive value is a value that has no properties or methods.
3.14 is a primitive value
A primitive data type is data that has a primitive value.
原始值是沒有屬性或方法的值。
3.14 是原始值
原始資料類型是具有原始值的資料。

JavaScript defines 7 types of primitive data types:
string: 'hello'
number: 42、3.14
boolean: true or false
null: 無
undefined: 一個尚未賦值的變數
symbol: 唯一且不可變的值，通常用於物件的唯一屬性鍵
bigint: 用於表示任意精度的整數，例如：1234567890123456789012345678901234567890n
*/


// Immutable 不可以變的
// Primitive values are immutable (they are hardcoded and cannot be changed).
// if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.
/*
當我們說「不變性」時，意思是這些基本的數據類型（如字串、數字、布林值等）一旦被設定，它們的值就無法改變。例如，3.14 永遠是 3.14，無法被修改。
簡單來說，你可以改變變數的值（例如把 x 設為 3.14），但數字 3.14 本身是不會變的。
*/
/*
Value	    Type	        Comment
"Hello"	    string	        "Hello" is always "Hello"
3.14	    number	        3.14 is always 3.14
true	    boolean	        true is always true
false	    boolean	        false is always false
null	    null (object)	null is always null
undefined	undefined	    undefined is always undefined
*/


// JavaScript Objects are Mutable｜JavaScript 物件是可變的
// 物件是「可變的」，意思是我們處理物件時，變數只是指向這個物件，而不是複製一個新的物件。
// const x = person;
// x 和 person 其實指向同一個物件。所以，如果你改變 x，person 也會跟著改，因為它們指向的是同一個物件，而不是分開的兩個物件。

// Create an Object
const person6 = {
    firstName: "Leo",
    lastName: "Chen",
    age:28,
    eyeColor: "brown"
}

console.log("Person6's age:", person.age);

// Create a Copy
const x = person6;

// Change Age
x.age = 10;

console.log("Change Person6's age by creating a Copy(x):", x.age);
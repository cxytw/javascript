// JavaScript Operators 運算符號
// Javascript operators are used to perform different types of mathematical and logical computations.
/* 
The Assignment Operator = assigns values 賦值運算子 = 賦值
The Addition Operator + adds values 加法運算子 + 新增值
The Multiplication Operator * multiplies values 乘法運算子 * 將值相乘
The Comparison Operator > compares values 比較運算子 > 比較值
*/


// JavaScript Assignment
// The Assignment Operator (=) assigns a value to a variable:
// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;
console.log("Assign the value x + y to z:", z);


// JavaScript Addition
let a = 5;
let b = 2;
let c = x + y;
console.log("Assign the value a + b to c:", c);


// JavaScript Multiplication
// The Multiplication Operator (*) multiplies numbers:
let d = 5;
let e = 2;
let f = d * e;
console.log("Assign the value d * e to f:", f);


// Types of JavaScript Operators
/*
There are different types of JavaScript operators:
Arithmetic Operators 算術運算符
Assignment Operators 賦值運算符
Comparison Operators 比較運算符
String Operators 字串運算符
Logical Operators 邏輯運算符
Bitwise Operators 位元運算符
Ternary Operators 三元運算符
Type Operators 類型運算符
*/


// JavaScript Arithmetic Operators
// Arithmetic Operators are used to perform arithmetic on numbers:
let g = 3;
let h = (100 + 50) * g;
console.log("Assign the value (100 + 50) * g to h:", h);


/*
Operator	Description
+	        Addition
-	        Subtraction
*	        Multiplication
**	        Exponentiation (ES2016)
/	        Division
%	        Modulus (Division Remainder)
++	        Increment
--	        Decrement
*/


// JavaScript Assignment Operators
// Assignment operators assign values to JavaScript variables.
// The Addition Assignment Operator (+=) adds a value to a variable.
let i = 10;
i += 5;
console.log("Adds a value to variable i(i += 5)", i);


/*
Operator	Example	   Same As
=	        x = y	   x = y
+=	        x += y	   x = x + y
-=	        x -= y	   x = x - y
*=	        x *= y	   x = x * y
/=	        x /= y	   x = x / y
%=	        x %= y	   x = x % y
**=	        x **= y	   x = x ** y
*/


// JavaScript Comparison Operators
/*
Operator	Description
==	        equal to 等於
===	        equal value and equal type 相等的值和相等的類型
!=	        not equal 不等於
!==	        not equal value or not equal type 值不相等或型別不相等
>	        greater than 大於
<	        less than 小於
>=	        greater than or equal to 大於或等於
<=	        less than or equal to 小於或等於
?	        ternary operator 三元運算符
*/


// JavaScript String Comparison 字串比較
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log("Is A less than B? " + result); // Here is true
console.log("A".charCodeAt(0)); // Use charCodeAt to calculate the Unicode value of the character "A".
// Ref: https://www.ascii-code.com/

// Note that strings are compared alphabetically:
let text3 = "20";
let text4 = "5";
let result2 = text3 < text4;
console.log("Is 20 less than 5? " + result2); // Here is true (Compare the first character, so 2 < 5.)


// JavaScript String Addition
let text5 = "John";
let text6 = "Doe";
let text7 = text5 + " " + text6;
console.log("text7:", text7);

// The += assignment operator can also be used to add (concatenate) strings:
let text8 = "What a very ";
text8 += "nice day";
console.log("text8:", text8);
// When used on strings, the + operator is called the concatenation operator 接合運算子.


// Adding Strings and Numbers
let j = 5 + 5;
let k = "5" + 5;
let l = "Hello" + 5;
console.log(j, k, l);
// If you add a number and a string, the result will be a string!


// JavaScript Logical Operators 邏輯運算子
/*
Operator	Description
&&      	logical and
||      	logical or
!      	    logical not
*/


// JavaScript Type Operators
/*
Operator	Description
typeof      Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type
*/
console.log(typeof(5));
console.log(typeof("Happy"));


// JavaScript Bitwise Operators
// Bit operators work on 32 bits numbers. JavaScript 會將所有參與位元運算的數字先轉換為 32 位二進位數字。
// Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number. 運算的結果仍然會被轉換回一般的 JavaScript 數字格式（十進位）。
/*
Operator	Description	            Example	    Same as	     Result	 Decimal
&			AND	                    5 & 1	    0101 & 0001	 0001	 1
|			OR	                    5 | 1	    0101 | 0001	 0101	 5
~			NOT	                    ~ 5	        ~0101	     1010	 10
^			XOR	                    5 ^ 1	    0101 ^ 0001	 0100	 4
<<			left shift	            5 << 1	    0101 << 1	 1010	 10
>>			right shift	            5 >> 1	    0101 >> 1	 0010	 2
>>>			unsigned right shift	5 >>> 1	    0101 >>> 1	 0010	 2
*/
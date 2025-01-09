// JavaScript Assignment

// JavaScript Assignment Operators
// Assignment operators assign values to JavaScript variables.
/*
Operator	Example	       Same As
=	        x = y	       x = y
+=	        x += y	       x = x + y
-=	        x -= y	       x = x - y
*=	        x *= y	       x = x * y
/=	        x /= y	       x = x / y
%=	        x %= y	       x = x % y // 取餘數後再賦值
**=	        x **= y	       x = x ** y // x 的 y 次方
*/

// Shift Assignment Operators 位元移位指定
/*
Operator	Example	    Same As
<<=	        x <<= y	    x = x << y
>>=	        x >>= y	    x = x >> y
>>>=	    x >>>= y	x = x >>> y
*/

// Bitwise Assignment Operators 位元運算指定
/*
Operator	Example	    Same As
&=	        x &= y	    x = x & y
^=	        x ^= y	    x = x ^ y
|=	        x |= y	    x = x | y
*/

// Logical Assignment Operators 邏輯運算指定
/*
Operator	Example	    Same As
&&=	        x &&= y	    x = x && (x = y)
||=	        x ||= y	    x = x || (x = y)
??=	        x ??= y	    x = x ?? (x = y)
*/


// The = Operator
// The Simple Assignment Operator assigns a value to a variable.
let a = 10;
console.log("Assigned a value to variable a:", a);
let b = 10 + a;
console.log("Assigned a value to variable b:", b);


// The += Operator
// The Addition Assignment Operator adds a value to a variable.
let c = 10;
c += 5; // c = c + 5
console.log("The addition Assignment Operator adds a value to variable c:", c);

let text = "Hello"; text += " World";
console.log("The addition Assignment Operator adds a string to variable text:", text);


// The -= Operator
// The Subtraction Assignment Operator subtracts a value from a variable.
let d = 10;
d -= 5; // d = d - 5
console.log("The subtraction Assignment Operator subtracts a value from variable d:", d);


// The *= Operator
// The Multiplication Assignment Operator multiplies a variable.
let e = 10;
e *= 5; // e = e * 5
console.log("The multiplication Assignment Operator multiplies variable e:", e);


// The **= Operator
// The Exponentiation Assignment Operator raises a variable to the power of the operand.
let f = 10;
f **= 5; // f = 10 ** 5
console.log("The exponentiation Assignment Operator raises variable f to the power of 5:", e);


// The /= Operator
// The Division Assignment Operator divides a variable.
let g = 10;
g /= 5; // g = g / 5
console.log("The Division Assignment Operator divides variable g:", g);


// The %= Operator
// The Remainder Assignment Operator assigns a remainder to a variable.
let h = 10;
h %= 5; // h = 10 % 5 
console.log("The remainder Assignment Operator assigns a remainder to variable h:", h);


// The <<= Operator
// The Left Shift Assignment Operator left shifts a variable.
let i = -100;
i <<= 5; // i = i << 5
console.log("The Left Shift Assignment Operator left shifts variable i:", i);


// The >>= Operator
// The Right Shift Assignment Operator right shifts a variable (signed).
let j = -100;
j >>= 5; // j = j >> 5
console.log("The Right Shift Assignment Operator right shifts variable j (signed):", j);


// The >>>= Operator
// The Unsigned Right Shift Assignment Operator right shifts a variable (unsigned).
let k = -100;
k >>>= 5; // k = k >>> 5
console.log("The Unsigned Right Shift Assignment Operator right shifts variable k (unsigned):", k);


// The &= Operator
// The Bitwise AND Assignment Operator does a bitwise AND operation on two operands and assigns the result to the variable.
let l = 10;
l &= 5; // l = l & 5
console.log("The Bitwise AND Assignment Operator does a bitwise AND operation on two operands and assigns the result to variable l:", l);


// The |= Operator
// The Bitwise OR Assignment Operator does a bitwise OR operation on two operands and assigns the result to the variable.
let m = 10;
m |= 5; // m = m | 5
console.log("The Bitwise OR Assignment Operator does a bitwise OR operation on two operands and assigns the result to variable m:", m);


// The ^= Operator
// The Bitwise XOR Assignment Operator does a bitwise XOR operation on two operands and assigns the result to the variable.
let n = 10;
n ^= 5; // n = n ^ 5
console.log("The Bitwise XOR Assignment Operator does a bitwise XOR operation on two operands and assigns the result to variable n:", n);
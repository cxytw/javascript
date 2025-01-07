// JavaScript Arithmetic 運算

// Arithmetic Operations
// A typical arithmetic operation operates on two numbers.
// The two numbers can be literals:
let x = 100 + 50;
console.log("Arithmetic operation operates on two numbers:", x);
// or variables:
let a = 100;
let b = 50;
let c = a + b;
console.log("Arithmetic operation operates on two variables:", c);
// or expressions:
let d = 3;
let e = (100 + 50) * d;
console.log("Arithmetic operation operates on two expressions:", e);


// Operators and Operands數學上的運算數（或稱運算元）
// The numbers (in an arithmetic operation) are called operands.
// The operation (to be performed between the two operands) is defined by an operator.
/*
Operand	Operator	Operand
100	    +	        50
*/


// Adding
// The addition operator (+) adds numbers:
let f = 5;
let g = 2;
let h = f + g;
console.log("The addition operator (+) adds numbers f + g（5+2）:", h);


// Subtracting
// The subtraction operator (-) subtracts numbers.
let i = 5;
let j = 2;
let k = i - j;
console.log("The subtraction operator (-) subtracts numbers i - j（5-2）:", k);


// Multiplying
// The multiplication operator (*) multiplies numbers.
let l = 5;
let m = 2;
let n = l * m;
console.log("The multiplication operator (*) multiplies numbers l * m（5*2）:", n);


// Dividing
// The division operator (/) divides numbers.
let o = 5;
let p = 2;
let q = o / p;
console.log("The division operator (/) divides numbers o * p（5/2）:", q);


// Remainder
// The modulus operator (%：模數運算符) returns the division remainder(除法的餘數).
let r = 5;
let s = 2;
let t = r % s;
console.log("The modulus operator（%） returns the division remainder 5 % 2:", q);

/*
In arithmetic, the division of two integers produces a quotient and a remainder. 在算術中，兩個整數相除產生一個商和一個餘數。
In mathematics, the result of a modulo operation is the remainder of an arithmetic division. 在數學中，模運算的結果是算術除法的餘數。
*/


// Incrementing 遞增
// The increment operator (++) increments numbers.
let u = 5;
u++; // = u + 1
console.log("The increment operator (++) increments numbers（u++）:",u);
let v = u;
console.log("Assigned variable u to v", v);


// Decrementing 遞減
// The decrement operator (--) decrements numbers.
let w = 5;
w--; // = w - 1
console.log("The decrement operator (--) decrements numbers（w--）:",w);
let y = w;
console.log("Assigned variable w to y:", y);


// Exponentiation 求冪
// The exponentiation operator (**) raises the first operand to the power of the second operand. 求冪運算子 (**) 將第一個運算元計算為第二個運算元的冪。
let ab = 5;
let z = ab ** 2; // ab的2次方
console.log("The result of 5 ** 2 is:",z);
// x ** y produces the same result as Math.pow(x,y): // Math.pow(x, y) 也表示 𝑥 x 的 𝑦 y 次方
let cd = 5;
let ef = Math.pow(cd,2);
console.log("The result of Math.pow(5, 2) is:",ef);


// Operator Precedence 運算符優先級
// Operator precedence describes the order in which operations are performed in an arithmetic expression. 運算子優先順序描述了算術表達式中運算的執行順序
let gh = 100 + 50 * 3;
console.log("The result of 100 + 50 * 3 (considering operator precedence) is:", gh);
/*
Is the result of example above the same as 150 * 3, or is it the same as 100 + 150?
Is the addition or the multiplication done first?
As in traditional school mathematics, the multiplication is done first.
Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
And (as in school mathematics) the precedence can be changed by using parentheses.
When using parentheses, the operations inside the parentheses are computed first:
上面例子的結果是跟 150 * 3 一樣，還是跟 100 + 150 一樣？
是先做加法還是先做乘法？
與傳統的學校數學一樣，首先進行乘法。
乘法 (*) 和除法 (/) 的優先權高於加法 (+) 和減法 (-)。
並且（就像在學校數學中一樣）可以透過使用括號來更改優先順序。
使用括號時，先計算括號內的運算：
*/
let ij = (100 + 50) * 3;
console.log("The result of (100 + 50) * 3 is:", ij);
// When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:
let jk = 100 + 50 - 3;
console.log("The result of 100 + 50 - 3 (computed from left to right) is:", jk);
let lm = 100 / 50 * 3;
console.log("The result of 100 / 50 * 3 (computed from left to right) is:", lm);
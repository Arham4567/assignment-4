//Problem 1 (Hello Variable)
let greeting = "Hello World";
console.log(greeting);

//Problem 2 (Basic Math)
let num1 = 2;
let num2 = 3;
let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let divide = num1 / num2;
console.log("Sum", sum);
console.log("Sub", sub);
console.log("Multiply", mul);
console.log("Divide", divide);

//Problem 3 (Swapping Values)
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(`Now the value of a is=>${a} and the value of b is=>${b}`);

//Problem 4 (Type Annotation)
//let message: string = 2;
//It is not poddible  as it is not allowed in tyescript

//Problem 5 (Modulus opertor)
let n1 = 7;
let n2 = 2;
let mod = n1 % n2;
console.log("modulus of two numbers 7/2 is =", mod);

//Problem 6 (increment challenge)
let int = 6;
console.log("By using first method", int + 1);
let count = 2;
count += 1;
console.log("By using second method", count);

//Problem 7 (Logical Gates)
let aa = true;
let bb = false;
let cc = true;
//AND operation
let and = aa && bb && cc;
console.log(and);
//OR operation
let or = aa || bb || cc;
console.log(or);
//NOT operation
let not = !aa;
!bb;
!cc;
console.log(not);
//Problem 8 (Compound assignment)
let num = 10;
console.log("num=", num);
let add = (num += 3);
console.log("+=", add);
let subt = (num -= 3);
console.log("-=", subt);
let mult = (num *= 3);
console.log("*=", mult);
let divi = (num /= 3);
console.log("/=", divi);

//Problem 9(Even or Odd)
let anynumber = 7;
if (anynumber % 2 == 1) {
  console.log("Odd");
} else {
  console.log("Even");
}

//Problem 10 (Voting eligibility)
let age = 17;
if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

//Prooblem 11 (Grading System)
let m: number = 45;
if (m >= 90) {
  console.log("A");
} else if (m >= 80) {
  console.log("B");
} else if (m >= 70) {
  console.log("C");
} else if (m >= 60) {
  console.log("D");
} else if (m >= 50) {
  console.log("E");
} else if (m <= 45) {
  console.log("F");
}

//Problem12 (Max Three)
let xx = 45;
let yy = 83;
let zz = 103;
if (xx > yy && xx > zz) {
  console.log("X is the largest among these");
} else if (yy > xx && yy > zz) {
  console.log("Y is the largest among these");
} else if (zz > xx && zz > yy) {
  console.log("Z is the largest among these");
}

//Problem 13 (Leap year checker)
let year = 2024;
let leapYear: boolean = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
if (leapYear == true) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year`);
}

//Problem 14 (Fahrenheit to Celsius Converter)
let tempFahrenheit = 68;
let tempCelsius = ((tempFahrenheit - 32) * 5) / 9;
console.log(`Temperature in celsius is ${tempCelsius}`);

//Problem 15 (Positive ,Negative or Zero)
let inte = -4;
if (inte > 0) {
  console.log("Positive Number");
} else if (inte < 0) {
  console.log("Negative Number");
} else if ((inte = 0)) {
  console.log("Number is Zero");
}

//Problem 16 (Multiplication table)
let givenNumber = 1;
console.log(`${givenNumber} X 1 = ${givenNumber * 1}`);
console.log(`${givenNumber} X 2 = ${givenNumber * 2}`);
console.log(`${givenNumber} X 3 = ${givenNumber * 3}`);
console.log(`${givenNumber} X 4 = ${givenNumber * 4}`);
console.log(`${givenNumber} X 5 = ${givenNumber * 5}`);
console.log(`${givenNumber} X 6 = ${givenNumber * 6}`);
console.log(`${givenNumber} X 7 = ${givenNumber * 7}`);
console.log(`${givenNumber} X 8 = ${givenNumber * 8}`);
console.log(`${givenNumber} X 9 = ${givenNumber * 9}`);
console.log(`${givenNumber} X 10 = ${givenNumber * 10}`);

// 1
let hello = "hello";
let owu  = "owu";
let com = "com";
let ua = "ua";
let one = 1;
let ten = 10;
let negativeNumber = -999;
let oneTwoThree = 123;
let pi = 3.14;
let exp = 2.7;
let sixteen = 16;
let positive = true;
let negative = false;
console.log(hello, owu, com, ua, one, ten, negativeNumber, oneTwoThree, pi, exp, sixteen, positive, negative);
document.write(hello + " "+ owu+" "+ com+" "+ ua+" "+one+" "+ ten+" "+ negativeNumber+" "+ oneTwoThree+" "+ pi+" "+exp+" "+sixteen+" "+positive+" "+negative);
alert(hello);
alert(owu);
alert(com);
alert(ua);
alert(one);
alert(ten);
alert(negativeNumber);
alert(oneTwoThree);
alert(pi);
alert(exp);
alert(sixteen);
alert(positive);
alert(negative);
console.log("--------------------------");
// 2
hello = "hi";
owu = "ok10";
com = "from";
ua = "Ukraine";
one = 0.01;
ten = 0.1;
negativeNumber = -9999;
oneTwoThree = 123123;
pi = 3.14124;
exp = 2.73424;
sixteen = 0.16;
positive = false;
negative = true;
console.log(hello, owu, com, ua, one, ten, negativeNumber, oneTwoThree, pi, exp, sixteen, positive, negative);
document.write("<hr>");
document.write(hello + " "+ owu+" "+ com+" "+ ua+" "+one+" "+ ten+" "+ negativeNumber+" "+ oneTwoThree+" "+ pi+" "+exp+" "+sixteen+" "+positive+" "+negative);
alert(hello);
alert(owu);
alert(com);
alert(ua);
alert(one);
alert(ten);
alert(negativeNumber);
alert(oneTwoThree);
alert(pi);
alert(exp);
alert(sixteen);
alert(positive);
alert(negative);
console.log("----------------------------");
// 3
const two = 2;
const three = 3;
const four = 4;
const firstLetter = "a";
const secondLetter = "b";
const thirdLetter = "c";
console.log(two, three, four, firstLetter, secondLetter, thirdLetter);
document.write("<hr>");
document.write(two+ " "+ three+ " "+four+ " "+ firstLetter+ " "+secondLetter+ " "+thirdLetter);
alert(two +" "+ three + " "+ four + " "+ firstLetter + " " + secondLetter + " " + thirdLetter);
console.log("-----------------------------");
// 4
let name = prompt("Enter your name");
let surname = prompt("Enter your surname");
let nameOfFather = prompt("Enter name of Father");
console.log( surname, name, nameOfFather);
document.write(name, " ", surname, " ", nameOfFather);
alert("Your full name: "+ surname + " " + name + " " + nameOfFather);
console.log("---------------------------------");
// 5
let person = name +" "+ surname +" "+ nameOfFather;
console.log("Me full name: "+   person);
//6
name = prompt("Enter father name");
surname = prompt("Enter father surname");
nameOfFather = prompt("Enter name of Father");
 let father = name +" "+ surname +" "+ nameOfFather;
console.log("Father: "+father);
name = prompt("Enter mother name");
surname = prompt("Enter mother surname");
 nameOfFather = prompt("Enter name of Father");
 let mother = name +" "+ surname +" "+ nameOfFather;
console.log("Mother: "+mother);
name = prompt("Enter sister name");
surname = prompt("Enter sister surname");
 nameOfFather = prompt("Enter name of Father");
 let sister = name +" "+ surname +" "+ nameOfFather;
console.log("Sister: "+sister);
console.log("---------------------------------");
// 7
let firstNum = prompt("Enter any number");
let secondNum = prompt("Enter any number");
let thirdNum = prompt("Enter any number");
console.log(+firstNum, +secondNum, +thirdNum);
console.log("---------------------------------");
// 8
firstNum = parseInt(prompt("Enter any number"));
secondNum = parseInt(prompt("Enter any number"));
thirdNum = parseInt(prompt("Enter any number"));
let fourthNum = parseInt(prompt("Enter any number"));
let result = firstNum +" "+secondNum+" "+thirdNum+" "+fourthNum;
console.log(result);
console.log("---------------------------------");
// 9
firstNum = parseFloat(prompt("Enter any number"));
secondNum = parseFloat(prompt("Enter any number"));
thirdNum = parseFloat(prompt("Enter any number"));
result = firstNum +" "+secondNum+" "+thirdNum;
console.log(result);
console.log("---------------------------------");
// 10
firstNum = Math.round(+prompt("Enter any number"));
secondNum = Math.round(+prompt("Enter any number"));
thirdNum = Math.round(+prompt("Enter any number"));
result = firstNum +" "+secondNum+" "+thirdNum;
console.log(result);
console.log("---------------------------------");
// 11
firstNum = parseInt(prompt("Enter any number"));
secondNum = parseInt(prompt("Enter any number"));
result = Math.pow(firstNum, secondNum);
console.log(result);
console.log("---------------------------------");
// 12
let a = 100;
let b = '100';
let c = true;
let d = undefined;
console.log(typeof(a),typeof(b),typeof(c),typeof(d));
console.log("---------------------------------");
// 13
a = (5!==6);
console.log(a);
a = (5>=6);
console.log(a);
a = (5===6);
console.log(a);
a = (5>6);
console.log(a);
a = (10 === 10);
console.log(a);
a = (10 >= 10);
console.log(a);
a = (10 > 10);
console.log(a);
a = (10 < 10);
console.log(a);
a = (10 !== 10);
console.log(a);
a = (123 === "123");
console.log(a);
a = (123 == "123");
console.log(a);
console.log("---------------------------------");
//14
console.log(132 > 100 && 45 < 12 );//false
console.log(34 > 33 && 23 < 90 );//true
console.log(99 > 100 && 45 > 12 );//false
console.log(132 > 100 || 45 < 12 );//true
console.log(111 > 11 || 45 < 111 );//true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );//true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );//true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );//false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));//true
console.log(!!'-1');
console.log(!!-1);
console.log(!!'0');
console.log(!!'null');
console.log(!!'undefined');
console.log(!!(3/'owu'));
console.log((111 > 11 || 45 < 111) ||  !!'0');
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));//false

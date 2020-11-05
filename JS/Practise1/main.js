// // 1
// let str = 'Hello';
// let num = 123;
// let flag = true;
// let txt = 'text';
// console.log(typeof str, typeof num, typeof flag, typeof txt);
// // 2
// let a1 = 5+3;
// let a2 = 5-3;
// let a3 = 5*3;
// let a4 = 5/3;
// let a5 = 5%3;
// console.log(a1, a2, a3, a4, a5);
// // 3
// let a6 = 5%3;
// let a7 = 3%5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'kg';
// console.log(a6, a7, a8, a9, a10);
// // 4
// let height = 23;
// let width = 10;
// let s = height*width;
// console.log(s+"cm");
// // 5
// let heigthC = 10;
// let dC = 4;
// let v = Math.PI*(dC/2)^2*heigthC;
// console.log(v);
// // 6
// let n = 3;
// let m = 4;
// let k = (n**2+m**2)**(1/2);
// console.log(k);
// // 7
// str = "Hello world";
// document.write(str);
// alert(str);
// console.log(str);
// // 8
// alert("Ilkiv Dmytro Bohdanovych" + "\n" + "19 years" +"\n"+ "analyze of fotball games");
// // 9
// let str1 = "Who ";
// let str2 = "Are ";
// let str3 = "You?";
// let concatenation = str1 + str2 + str3;
// document.write("<br>"+concatenation);
// // 10
// str = "20";
// let a = 5;
// document.write("<br>"+ str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
// // 11
// console.log(parseInt("3.14"), parseInt("-7.875"), parseInt("435"), parseInt("Вася"));
// // 12
// str = prompt("Enter something", "ho-ho")
// console.log(str);
// // 13
// let firstNum = +prompt("Enter any number");
// let secondNum = +prompt("enter second number");
// alert( firstNum + secondNum );
// // 14
// let name = prompt("enter your name");
// let surname = prompt("enter your surname");
// let age = prompt("enter your age");
// alert("Доброго вечера "+name+" "+surname+", мои поздравления что вам "+age);
// //add//
// // 1
// let firstNum = +prompt("Enter any number");
// let secondNum = +prompt("enter second number");
// let thirdNum = +prompt("Enter third number");
// if(firstNum <= secondNum && firstNum <= thirdNum){
//     console.log(firstNum);
//     if (secondNum<=thirdNum){
//         console.log(secondNum);
//         console.log(thirdNum);
//     }else {
//         console.log(thirdNum);
//         console.log(secondNum);
//     }
// } else if (secondNum <= thirdNum && secondNum <=firstNum){
//     console.log(secondNum);
//     if (firstNum<=thirdNum){
//         console.log(firstNum);
//         console.log(thirdNum);
//     }else {
//         console.log(thirdNum);
//         console.log(firstNum);
//     }
// }else{
//     console.log(thirdNum);
//     if (firstNum<=secondNum){
//         console.log(firstNum);
//         console.log(secondNum);
//     }else {
//         console.log(secondNum);
//         console.log(firstNum);
//     }
// }
// // 2
// let color = prompt("what color?");
// if (color === "green"){
//     alert("GO");
// } else if (color === "red"){
//     alert("Stop");
// } else if (color === "yellow"){
//     alert("Wait");
// } else{
//     alert("Do what you want");
// }
// 3
// let color = prompt("what color?");
// let isRoadClear = confirm("Is Road Clear?");
// if(color === "green" && !!isRoadClear){
//     alert("GO");
// } else if(color === "green" && !isRoadClear){
//     alert("Wait");
// } else if(color === "red" && !!isRoadClear ){
//     alert("Stop");
// } else if(color === "red" && !isRoadClear ){
//     alert("Stop wait");
// } else if(color === "yellow" && !!isRoadClear ){
//     alert("Wait");
// } else if(color === "yellow" && !isRoadClear ){
//     alert("Wait");
// } else{
//     alert("Do what you want");
// }
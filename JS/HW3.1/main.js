// // -- створити об'єкт (не меньше 5ти властивостей) який описує
// // - собаку
// let dog={
//     name: 'Harlie',
//     age: 3,
//     breed: 'bulldog',
//     aggression: true,
//     isCollar: true
// }
// // - людину
// let person = {
//     name: 'Andrii',
//     age: 21,
//     isGirlfriend: true,
//     aggression: false,
//     nationality: 'Ukrainian'
// }
// // - автомобіль
// let car = {
//     brand: 'Audi',
//     model: 'A6',
//     age: 6,
//     color: 'grey',
//     isFourDours: true
// }
// // - квартиру
// let apartment ={
//     numberRooms: 3,
//     area: 'Zaliznychny',
//     cost: 21000,
//     floor: 4,
//     NumRegisteredPersons: 4
// }
// // - книгу
// let book ={
//     author: 'Stiven King',
//     name: 'Joyland',
//     year: 2005,
//     isBestSeller: true,
//     IsElectronicVersion: true
// }
// // -- Створити масив та вивести його в консоль:
// // //     - з 5 собак
// // let dogs = ['tramp', 'husky', 'shepherd', 'bulldog', 'chihuahua'];
// // console.log(dogs);
// // // - 3 5 людей
// // let persons = ['andrew', 'dmytro', 'alina', 'oleg', 'vitaliy'];
// // console.log(persons);
// // // - з 5 автомобілів
// // let cars = ['audi', 'lada', 'opel', 'kia', 'renault'];
// // console.log(cars);
// // -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// // - будинок
// let house = {
//     flour: {
//         fisrt: '4 rooms',
//         second: '3 rooms',
//         third: '2 rooms'
//     },
//     color: 'black',
//     owners: ['andrew', 'vasyl', 'ira'],
//     cost: 1200000,
//     area: 'Zaliznychny'
// }
// console.log(house);
// // Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'maxim', age: 31, status: true}
//     ];
// // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
// console.log(users[7].status);
// // - статус Максима
// console.log(users[10].status);
// // - ім'я передостаннього об'єкту
// console.log(users[users.length - 2].name);
// // - ім'я третього об'єкта
// console.log(users[2].name);
// // - вік Олега
// console.log(users[6].age);
// // - вік Олі
// console.log(users[9].age);
// // - вік + ім'я 5го об'єкта
// console.log(users[4].name +' '+ users[5].age);
// // - вік + сатус Анни
// console.log(users[5].age + ' ' + users[5].status);
// // -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// // -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // - отримує текст з параграфа з id "content"
// let content = document.getElementById(`content`);
// // - отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules');
// // - замініть текст параграфа з id 'content' на будь-який інший
// content.innerText = "Hello World!";
// // - замініть текст параграфа з id 'rules' на будь-який інший
// rules.innerText = "My life - my rules)";
// // - змініть кожному елементу колір фону на червоний
// let ul = document.getElementsByTagName('ul');
// ul[0].style.backgroundColor = 'red';
// content.style.backgroundColor = 'red';
// rules.style.backgroundColor= 'red';
// // - змініть кожному елементу колір тексту на синій
// ul[0].style.color = 'blue';
// content.style.color = 'blue';
// rules.style.color= 'blue';
// // - отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(rules.classList);
// // - отримати всі елементи з класом fc_rules
// let fcRules = document.getElementsByClassName('fc_rules');
// // - поміняти колір тексту у всіх елементів fc_rules на червоний
// for (let rule of fcRules) {
//     rule.style.color = 'red';
// }

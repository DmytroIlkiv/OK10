// // // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let object1 = {
//     name: "Dmytro",
//     isFriends: true,
//     surname: 'Ilkiv',
// }
// let object2 = {
//     isDog: true,
//     age: 12,
//     breed: 'shepherd'
// }
// let object3 = {
//     isComputer: true,
//     color: 'black',
//     numberCoresComp: 4
// }
// let object4 = {
//     isDoor: true,
//     shape: 'restangular',
//     isGlassIn: false
// }
// let object5 = {
//     area: "Frankivskyy",
//     number: 120000,
//     location: 'South'
// }
// // // // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let man1 = {
//     name: 'Andrew',
//     skills: ['swimming', 'codding', 'eating'],
//     wife: {
//         name: 'Alina',
//         age: 18,
//         canCook: true
//     },
//     age: 21
// }
// let computer = {
//     nickname: 'Jonny',
//     contain: ['monitor', 'mouse', 'keyboard'],
//     hardDisk: {
//         company: 'AMD',
//         age: 2,
//         capacity: '100000gb'
//     },
//     hasAudio: true
// }
// let flowerpot = {
//     flower: 'chamomile',
//     soil: ['sand', 'stones'],
//     origin: {
//         country: 'USA',
//         state: 'Texas',
//     },
//     isBig: true
// }
// let bike = {
//     brand: 'Suzuki',
//     wheels: ['first', 'second'],
//     model: {
//         name: 'cround',
//         age: 2010,
//         number: 12000
//     },
//     isBeautiful: true,
//     engine: 1000
// }
// // // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (const object1Keys in object1) {
//     console.log(object1Keys);
// }
// console.log('--------------');
// for (const object2Keys in object2) {
//     console.log(object2Keys);
// }
// console.log('--------------');
// for (const object4Keys in object4) {
//     console.log(object4Keys);
// }
// console.log('--------------');
// for (const object3Keys in object3) {
//     console.log(object3Keys);
// }
// console.log('--------------');
// for (const object5Keys in object5) {
//     console.log(object5Keys);
// }
// console.log('--------------');
// for (let computerKey in computer) {
//     console.log(computerKey);
// }
// console.log('--------------');
// for (let man1Key in man1) {
//     console.log(man1Key);
// }
// console.log('--------------');
// for (let flowerpotKey in flowerpot) {
//     console.log(flowerpotKey);
// }
// console.log('--------------');
// for (let bikeKey in bike) {
//     console.log(bikeKey);
// }
// console.log('--------------');
// // // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let arr = [];
// let strings = Object.keys(man1);
// arr.push(strings);
// let strings1 = Object.keys(flowerpot);
// arr.push(strings1);
// let strings2 = Object.keys(bike);
// arr.push(strings2);
// let strings3 = Object.keys(computer);
// arr.push(strings3);
// let strings4 = Object.keys(object1);
// arr.push(strings4);
// let strings5 = Object.keys(object2);
// arr.push(strings5);
// let strings6 = Object.keys(object3);
// arr.push(strings6);
// let strings7 = Object.keys(object4);
// arr.push(strings7);
// let strings8 = Object.keys(object5);
// arr.push(strings8);
// console.log(arr);
// // // - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let arrCars = [
//     {model: 'Audi', year: 2010, power: 110, colr: 'black'},
//     {model: 'Audi1', year: 2000, power: 150, colr: 'red'},
//     {model: 'Audi2', year: 2012, power: 180, colr: 'green'},
//     {model: 'Audi3', year: 2013, power: 140, colr: 'grey'},
//     {model: 'Audi4', year: 2014, power: 120, colr: 'white'},
//     {model: 'Audi5', year: 2015, power: 140, colr: 'burgundy'},
//     {model: 'Audi6', year: 2016, power: 160, colr: 'orange'},
//     {model: 'Audi7', year: 2017, power: 150, colr: 'lime'},
//     {model: 'Audi8', year: 2018, power: 140, colr: 'blue'},
//     {model: 'Audi9', year: 2019, power: 130, colr: 'grey'},
//     {model: 'Audi10', year: 2010, power: 210, colr: 'white'},
// ]
//
// // // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//     {name: 'kyiv', population: 3200000, country: 'Ukraine', area: 'north'},
//     {name: 'lviv', population: 1000000, country: 'Ukraine', area: 'west'},
//     {name: 'donetsk', population: 1800000, country: 'Ukraine', area: 'east'},
//     {name: 'odesa', population: 1900000, country: 'Ukraine', area: 'south'},
//     {name: 'kharkiv', population: 1600000, country: 'Ukraine', area: 'east'}
// ]
// // // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars = [
//     {model: 'Audi', year: 2010, power: 110, colr: 'black', driver:{name: 'vlad', age:32, sex: 'male', experience: 3}},
//     {model: 'Audi1', year: 2000, power: 150, colr: 'red', driver:{name: 'asd', age:30, sex: 'male', experience: 3}},
//     {model: 'Audi2', year: 2012, power: 180, colr: 'green',driver:{name: 'asdsaf', age:22, sex: 'male', experience: 3}},
//     {model: 'Audi3', year: 2013, power: 140, colr: 'grey', driver:{name: 'asfsdba', age:42, sex: 'male', experience: 3}},
//     {model: 'Audi4', year: 2014, power: 120, colr: 'white', driver:{name: 'zcxsb', age:52, sex: 'female', experience: 3}},
//     {model: 'Audi5', year: 2015, power: 140, colr: 'burgundy', driver:{name: 'vndnf', age:22, sex: 'female', experience: 3}},
//     {model: 'Audi6', year: 2016, power: 160, colr: 'orange', driver:{name: 'thmf', age:37, sex: 'male', experience: 3}},
//     {model: 'Audi7', year: 2017, power: 150, colr: 'lime', driver:{name: 'qetqr', age:36, sex: 'male', experience: 3}},
//     {model: 'Audi8', year: 2018, power: 140, colr: 'blue', driver:{name: 'hh', age:39, sex: 'male', experience: 3}},
//     {model: 'Audi9', year: 2019, power: 130, colr: 'grey', driver:{name: 'jhg', age:32, sex: 'male', experience: 3}},
//     {model: 'Audi10', year: 2010, power: 210, colr: 'white', driver:{name: 'vlassgsd', age:36, sex: 'male', experience: 3}},
// ]
// // // - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while (i < arrCars.length){
//     console.log(arrCars[i]);
//     i++
// }
// console.log('----------------');
// i = 0;
// while (i < cars.length){
//     console.log(cars[i]);
//     i++
// }
// console.log('----------------');
// i = 0;
// while (i < cities.length){
//     console.log(cities[i]);
//     i++
// }
// // // - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }
// console.log('----------------');
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// console.log('----------------');
// for (let i = 0; i < arrCars.length; i++) {
//     console.log(arrCars[i]);
// }
// // // - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const city of cities) {
//     console.log(city);
// }
// console.log('-------------------------');
// for (let car of cars) {
//     console.log(car);
// }
// console.log('-------------------------');
// for (let arrCar of arrCars) {
//     console.log(arrCar);
// }

// // // //  - взять объекты из задания 1 и превратить каждый в json.
// let json1 = JSON.stringify(object1);
// let json2 = JSON.stringify(object2);
// let json3 = JSON.stringify(object3);
// let json4 = JSON.stringify(object4);
// let json5 = JSON.stringify(object5);
// console.log(json1, json2, json3, json4, json5);
// // // - взять json из задания 1 и превратить их обратно в объекты.
//  let parse1 = JSON.parse(json1);
//  let parse2 = JSON.parse(json2);
//  let parse3 = JSON.parse(json3);
//  let parse4 = JSON.parse(json4);
//  let parse5 = JSON.parse(json5);
// console.log(parse1, parse2, parse3, parse4, parse5);
// // - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// let json = [];
// for (let i=0; i<arrCars.length; i++){
//     json.push(JSON.stringify(arrCars[i]))
// }
// console.log(json);
// // - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// let i=0;
// let json = [];
// while (i<cities.length){
//     json.push(JSON.stringify(cities[i]));
//     i++;
// }
// console.log(json);
// // // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let json = [];
// for (const car of cars) {
//     json.push(JSON.stringify(car))
// }
// console.log(json);
// // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [
//     {name: 'Vasya', age:21, skills:['cooking', 'swimming', 'lazing']},
//     {name: 'Alex', age:16, skills:['gaming', 'swimming', 'lazing']},
//     {name: 'Vasylyna', age:25, skills:['restling', 'swimming', 'lazing']},
//     {name: 'Dima', age:23, skills:['singing', 'swimming', 'lazing']},
//     {name: 'Ihor', age:20, skills:['working', 'swimming', 'lazing']},
// ]
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     for (let j = 0; j < users[i].skills.length; j++) {
//         console.log(users[i].skills[j]);
//     }
// }
// // // // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let users = [
//     {name: 'Vasya', age:21, skills:['cooking', 'swimming', 'lazing']},
//     {name: 'Alex', age:16, skills:['gaming', 'swimming', 'lazing']},
//     {name: 'Vasylyna', age:25, skills:['restling', 'swimming', 'lazing']},
//     {name: 'Dima', age:23, skills:['singing', 'swimming', 'lazing']},
//     {name: 'Ihor', age:20, skills:['working', 'swimming', 'lazing']},
// ];
// let empty = [];
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     for (let j = 0; j < users[i].skills.length; j++) {
//         console.log(users[i].skills[j]);
//         empty.push(users[i].skills[j])
//     }
// }
// console.log(empty);
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     for (let j = 0; j < users[i].skills.length; j++) {
//         console.log(users[i].skills[j]);
//     }
// }
// //
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
// // - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let any = [];
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].address);
//     any.push(users[i].address)
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
//
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     let address = '';
//     let str = '';
//     for (const usersKey in users[i].address) {
//         address+= ' ' + users[i].address[usersKey];
//     }
//     str += users[i].name + ' ' + users[i].age + ' ' + users[i].status;
//     let div = document.createElement("div");
//     div.innerText = str + address;
//     document.body.appendChild(div);
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     let address = '';
//     for (const usersKey in users[i].address) {
//         address+= ' ' + users[i].address[usersKey];
//     }
//     let h1 = document.createElement("h3");
//     h1.innerText = users[i].name
//     let h2 = document.createElement("h3");
//     h2.innerText = users[i].status
//     let h3 = document.createElement("h3");
//     h3.innerText = users[i].age
//     let h4 = document.createElement("h3");
//     h4.innerText = address
//     let div = document.createElement("div");
//     div.appendChild(h1);
//     div.appendChild(h2);
//     div.appendChild(h3);
//     div.appendChild(h4);
//     document.body.appendChild(div);
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     let h1 = document.createElement("h3");
//     h1.innerText = users[i].name;
//     let h2 = document.createElement("h3");
//     h2.innerText = users[i].status;
//     let h3 = document.createElement("h3");
//     h3.innerText = users[i].age;
//     let h4 = document.createElement("div");
//     debugger;
//     for (const usersKey in users[i].address) {
//         let address = document.createElement("div");
//         address.innerText = users[i].address[usersKey];
//         h4.appendChild(address);
//     }
//     let div = document.createElement("div");
//     div.appendChild(h1);
//     div.appendChild(h2);
//     div.appendChild(h3);
//     div.appendChild(h4);
//     document.body.appendChild(div);
// }
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //     Записати цей об'єкт в новий масив
// // Частковий приклад реультату:
// //     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
// let arrNew= [];
// for (const userId of usersWithId) {
// for (const citiesWithIdElement of citiesWithId) {
//     if (userId.id === citiesWithIdElement.user_id){
//         userId.address = citiesWithIdElement;
//     }
// }
//     arrNew.push(userId);
// }
// console.log(arrNew);
//
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let element = document.createElement('div');
// element.setAttribute('id', 'newId');
// element.setAttribute('class', 'newClass');
// element.innerText = 'qweqweqweqeqweqwewqeqweqeqweqw';
// document.body.appendChild(element);
// let txt1 = document.getElementsByClassName('newClass')[0].innerText;
// let txt2 = document.getElementsByTagName('div')[0].innerText;
// let txt3 = document.getElementById('newId').innerText;
// console.log(txt1, txt2, txt3);
//
// // - змінити цей текст використовуючи селектори id, class,  tag
// document.getElementById('newId').innerText = "Hello";
// document.getElementsByTagName('div')[0].innerText = 'How are you';
// document.getElementsByClassName('newClass')[0].innerText = 'Bye';
// // - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// document.getElementsByClassName('newClass')[0].style.width = '150px';
// document.getElementsByClassName('newClass')[0].style.height = '150px';
// document.getElementsByTagName('div')[0].style.width = '100px';
// document.getElementsByTagName('div')[0].style.height = '100px';
// document.getElementById('newId').style.width = '50px';
// document.getElementById('newId').style.height = '50px';

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table = document.createElement('table');
// document.body.appendChild(table);
// let tr = document.createElement('tr');
// table.appendChild(tr);
// for (let i = 0; i < 3; i++) {
//     let td = document.createElement('td');
//     td.innerText = "column" + [i];
//     tr.appendChild(td)
// }
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let table = document.createElement('table');
// document.body.appendChild(table);
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//     table.appendChild(tr);
//     for (let i = 0; i < 3; i++) {
//         let td = document.createElement('td');
//         td.innerText = "column" + [i + 1];
//         tr.appendChild(td)
//     }
// }
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let table = document.createElement('table');
// document.body.appendChild(table);
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//     table.appendChild(tr);
//     for (let i = 0; i < 5; i++) {
//         let td = document.createElement('td');
//         td.innerText = "column" + [i + 1];
//         tr.appendChild(td)
//     }
// }
// // - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let n = prompt('enter number of lines');
// let m = prompt("enter number of columns");
// let table = document.createElement('table');
// document.body.appendChild(table);
// for (let i = 0; i < n; i++) {
//     let tr = document.createElement('tr');
//     table.appendChild(tr);
//     for (let i = 0; i < m; i++) {
//         let td = document.createElement('td');
//         td.innerText = "column" + [i + 1];
//         tr.appendChild(td)
//     }
// }

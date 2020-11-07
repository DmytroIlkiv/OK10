// // - створити функцію яка виводить масив
// let arr = [1, 2, 3, 4, 5, 6, 7]
//
// function outputArray(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
//
// // outputArray(arr);
//
// // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function randomArray(length, min, max) {
//     let arr1 = [];
//     for (let i = 0; i < length; i++) {
//         arr1[i] = Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     outputArray(arr1);
// }
//
// // randomArray(12,1,25);
// // - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function minFromThreeNumber(first, second, third) {
//     let min;
//     (first <= second && first <= third) ? min = first : (second <= first && second <= third) ? min = second : min = third;
//     return min;
// }
//
// // console.log(minFromThreeNumber(-1, 1, 1));
//
// // - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function maxFromThreeNumber(first, second, third) {
//     let max = first;
//     if (second >= first && second >= third) max = second;
//     if (third >= second && third >= first) max = third;
//     return max;
// }
//
// // console.log(maxFromThreeNumber(8, 4, 10,));
//
// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function anyNumbers() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         if (arguments[i] >= max) max = arguments[i];
//         if (arguments[i] <= min) min = arguments[i];
//     }
//     console.log('max', max);
//     return min;
// }
//
// // console.log('min', anyNumbers(1000, -200, 3, 4, 2, 4, 21, 4, 2, 1, 3, 52, 1, 4, 5, 2, 3, 5, 5, 55, 5, 5, -1));
// // - створити функцію яка виводить масив
// arr = [1, 2, 3, 4, 5, 6, 7]
//
// function outputArray2(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
//
// // outputArray(arr);
// // - створити функцію яка повертає найбільше число з масиву
// function maxFromArray(arr) {
//     if (Array.isArray(arr)) {
//         let max = arr[0];
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] >= max) max = arr[i];
//         }
//         return max;
//     } else {
//         console.log('It is not an array! Try again');
//     }
// }
//
// // console.log(maxFromArray([-1000, 200, 30, 4],));
// // - створити функцію яка повертає найменьше число з масиву
// function minFromArray(array) {
//     if (Array.isArray(array)) {
//         let min = array[0];
//         for (let i = 1; i < array.length; i++) {
//             if (arr[i] <= min) min = array[i];
//         }
//         return min;
//     } else {
//         console.log('It is not an array! Try again');
//     }
// }
//
// // console.log(minFromArray(arr));
//
// // - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function sumOfElements(array) {
//     let sum = 0;
//     for (const element of array) {
//         sum += element;
//     }
//     return sum;
// }
//
// // console.log(sumOfElements([1, 2, 3, 4,10]));
//
// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function avaregeElement(array) {
//     return sumOfElements(array) / array.length;
// }
//
// // console.log(avaregeElement([1, 0, 1, 2]));
//
// // - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let cities = [
//     {name: 'kyiv', population: 3200000, country: 'Ukraine', area: 'north'},
//     {name: 'lviv', population: 1000000, country: 'Ukraine', area: 'west'},
//     {name: 'donetsk', population: 1800000, country: 'Ukraine', area: 'east'},
//     {name: 'odesa', population: 1900000, country: 'Ukraine', area: 'south'},
//     {name: 'kharkiv', population: 1600000, country: 'Ukraine', area: 'east'},
//     {name: 'afas', population: 123123123}
// ]
//
// function numberObject(arrayWithObjects) {
//     let num = 0;
//     for (const obj of arrayWithObjects) {
//         if (typeof obj === 'object' && !Array.isArray(obj)) num++;
//     }
//     return num;
// }
//
// // console.log(numberObject(cities));
//
// // - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function numberFieldsOfObjects(arrayWithObject) {
//     let num = 0;
//     for (let i = 0; i < arrayWithObject.length; i++) {
//         for (const Key in arrayWithObject[i]) {
//             num++;
//         }
//     }
//     return num;
// }
//
// // console.log(numberFieldsOfObjects(cities));
//
// // - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //     Приклад
// //     [1,2,3,4]
// //     [2,3,4,5]
// // результат
// //     [3,5,7,9]
// function foldTwoArrays(array1, array2) {
//     if (array1.length === array2.length && Array.isArray(array2) && Array.isArray(array1)) {
//         let arr = [];
//         for (let i = 0; i < array1.length; i++) {
//             arr.push(array1[i]+array2[i]);
//         }
//         return arr
//     }
// }
// // console.log(foldTwoArrays([1, 2, 3, 4], [2, 3, 4, 5]));

// // - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// function changeElements(array, i) {
//     let any;
//     if (i === array.length - 1 || i >= array.length) {
//         console.log('array[i] dont have next element');
//     } else {
//         any = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = any;
//         return array;
//     }
// }
//
// // console.log(changeElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
//
// // - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
// // Приклад
// // [1,0,6,0,3] => [1,6,3,0,0]
// // [0,1,2,3,4] => [1,2,3,4,0]
// // [0,0,1,0]   => [1,0,0,0]
// function nullElementsInEnd(array) {
//     if (array.length >= 2 && array.length <= 100) {
//         let length = array.length;
//         for (let i = 0; i < length; i++) {
//             if (array[i] === 0) {
//                 array[array.length] = array[i];
//             }
//         }
//         for (let j = 0; j < length; j++) {
//             if (array[j] === 0) {
//                 array.splice(j,1);
//                 j--;
//                 length--;
//             }
//         }
//         return array;
//     } else {
//         console.log('incorrect length of array');
//     }
// }
// console.log(nullElementsInEnd([0,0,1,0]));
//
// // Створити функцію яка :
// // - Додає в боді блок з текстом "Hello owu"
// function addHelloWorld(){
//     let helloWorld = document.createElement('div');
//     helloWorld.innerText = 'Hello World';
//     document.body.appendChild(helloWorld);
// }
// addHelloWorld()
//
// // - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addText(typeOfElement, text){
//     let block = document.createElement(typeOfElement);
//     block.innerText = text;
//     document.body.appendChild(block);
// }
// addText('p', 'qweqeqweqwe')
//
// // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// let arrCars = [
//     {model: 'Audi', year: 2010, power: 110, colr: 'black'},
//     {model: 'Lexus', year: 2000, power: 150, colr: 'red'},
//     {model: 'Lada', year: 2012, power: 180, colr: 'green'},
//     {model: 'Walf', year: 2013, power: 140, colr: 'grey'},
//     {model: 'Opel', year: 2014, power: 120, colr: 'white'},
//     {model: 'Renault', year: 2015, power: 140, colr: 'burgundy'},
//     {model: 'Mersedes', year: 2016, power: 160, colr: 'orange'},
//     {model: 'Shevrolet', year: 2017, power: 150, colr: 'lime'},
//     {model: 'KIA', year: 2018, power: 140, colr: 'blue'},
//     {model: 'Toyota', year: 2019, power: 130, colr: 'grey'},
//     {model: 'Ferarri', year: 2010, power: 210, colr: 'white'},
// ]
// function addArrayInBlockWithId(arrayCars, id){
//     for (const arrCar of arrayCars) {
//         let div = document.createElement('div');
//         div.innerText = `model: ${arrCar.model} year: ${arrCar.year} power: ${arrCar.power} color: ${arrCar.colr}`;
//         document.getElementById(id).appendChild(div);
//     }
// }
// addArrayInBlockWithId( arrCars, 'car')

// // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// // Для кожної властивості створити всередені блока автомоблія свій блок
// let arrCars = [
//     {model: 'Audi', year: 2010, power: 110, colr: 'black'},
//     {model: 'Lexus', year: 2000, power: 150, colr: 'red'},
//     {model: 'Lada', year: 2012, power: 180, colr: 'green'},
//     {model: 'Walf', year: 2013, power: 140, colr: 'grey'},
//     {model: 'Opel', year: 2014, power: 120, colr: 'white'},
//     {model: 'Renault', year: 2015, power: 140, colr: 'burgundy'},
//     {model: 'Mersedes', year: 2016, power: 160, colr: 'orange'},
//     {model: 'Shevrolet', year: 2017, power: 150, colr: 'lime'},
//     {model: 'KIA', year: 2018, power: 140, colr: 'blue'},
//     {model: 'Toyota', year: 2019, power: 130, colr: 'grey'},
//     {model: 'Ferarri', year: 2010, power: 210, colr: 'white'},
// ]
// function addArrayInBlockWithId(arrayCars, id){
//     for (const Car of arrayCars) {
//         let div = document.createElement('div');
//         div.style.margin = '35px 0';
//         div.style.fontWeight = '800'
//         div.innerText = Car.model;
//         document.getElementById(id).appendChild(div);
//         for (const Key in Car) {
//             let p = document.createElement('p');
//             p.style.fontWeight = '500';
//             p.innerText = `${Key}: ${Car[Key]}`;
//             div.appendChild(p)
//         }
//     }
// }
// addArrayInBlockWithId( arrCars, 'car')

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// // Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// // Частковий приклад реультату: let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
// function twoArrayInOne(array1, array2){
//     for (const element of array1) {
//         for (const array2element of array2) {
//             if (array2element.user_id === element.id) element.address = array2element;
//         }
//     }
//     return array1;
// }
//
// console.log(twoArrayInOne(usersWithId, citiesWithId));

// // ***- беремо завдання з правилами з укроку №3 :
// // Та робимо це функцією.При цьому правила отримувати через аргумент.
// // "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// // При цому в блоці, номер правила записати в свій блок, текст правила записати в  свій окремий блок.
// // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
//
// function arrayWithRules(array){
//     let wrap = document.createElement('div');
//     // wrap.style.backgroundColor = 'grey';
//     // wrap.style.marginTop = '60px'
//     document.body.appendChild(wrap);
//     for (let i = 0; i < array.length; i++) {
//         let div = document.createElement('div');
//         div.classList.add(`rule${i + 1}`);
//         wrap.appendChild(div);
//         let h3 = document.createElement('h3');
//         let p = document.createElement('p');
//         h3.innerText = array[i].title;
//         p.innerText = array[i].body;
//         div.appendChild(h3);
//         div.appendChild(p);
//     }
// }
//
// arrayWithRules(rules);

// задачка:
//     найти в массиве уникальное значение, пример:
//
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//
// условие:
//     массив длиной минимум 3 элемента
//
// function findUniq(array) {
//     let k = 0
//     let uniq;
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[i] === array[j]) k++;
//         }
//         if (k === 1) uniq = array[i];
//         k = 0;
//     }
//     return uniq;
// }
// console.log(findUniq([1, 1, 2, 2, 3, 4, 3, 2, 2, 1, 1]));
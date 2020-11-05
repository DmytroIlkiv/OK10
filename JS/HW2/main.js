// // --створити масив та вивести його в консоль:
// //  - з 5 числових значень
// let arrNum = [ 11,222,333,444,5555];
// console.log(arrNum);
// // - з 5 стічкових значень
// let arrStr = [ 'Hello', 'My', ' Dear', 'Friend', '!'];
// console.log(arrStr);
// // - з 5 значень стрічкового, числового та булевого типу
// let arrRandom = [ 123, 'How', true, 21, false];
// console.log(arrRandom);
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arrEmpty = [];
// console.log(arrEmpty);
// arrEmpty[0] = 'qwrqwrq';
// arrEmpty[1] = 123;
// arrEmpty[2] = true;
// console.log(arrEmpty);
// //
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i=0; i<10; i++){
//     document.write('<div>asdqwe</div>');
// }
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>asdqwe ${i}</div>`);
// }
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20 ) {
//     document.write('<h1>asdqwe</h1>');
//     i++;
// }
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20){
//     document.write(`<h1>asdqwe ${i}</h1>`);
//     i++;
// }
// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arrNumber = [11,22,33,4,5,66,777,888,999,10];
// for (let i = 0; i < arrNumber.length; i++){
//     console.log(arrNumber[i]);
// }
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrStr = ['qwe', '12312', 'asfa', 'wqeq', '22434', '436gf', 'qwr', 'asfqwc', 'true', 'false'];
// let i = 0;
// while ( i < arrStr.length){
//     console.log(arrStr[i]);
//     i++;
// }
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arrRandom = [ 123, 'How', true, 21, false, true, {name: 'Alif' , age:32}, [1,2,3], 'asdfds', 321];
// for (let i = 0; i < arrRandom.length; i++) {
//     console.log(arrRandom[i]);
// }
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrRandom = [ 123, 'How', true, 21, false, true, 321123, false, 'asdfds', 321];
// let i=0;
// while (i < arrRandom.length){
//     if (typeof arrRandom[i] === 'boolean'){
//         console.log(arrRandom[i]);
//     }
//     i++;
// }
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrRandom = [ 123, 'How', true, 21, false, true, 321123, false, 'asdfds', 321];
// for (let i = 0; i < arrRandom.length; i++) {
//     if ( typeof arrRandom[i] === 'number'){
//         console.log(arrRandom[i]);
//     }
// }
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrRandom = [ 123, 'How', true, 21, false, true, 321123, false, 'asdfds', '321'];
// let i =0;
// do {
//     if (typeof arrRandom[i] === 'string'){
//         console.log(arrRandom[i]);
//     }
//     i++;
// }while ( i < arrRandom.length);
// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr= [];
// arr[0] = 'qwe';
// arr[1] = 123;
// arr[2] = true;
// arr[3] = {name: 'vlad',
//           age: 12 };
// arr[4] = [1,2,3];
// arr[5] = 312;
// arr[6] = 'qweasad';
// arr[7] = false;
// arr[8] = NaN;
// arr[9] = undefined;
// for (let i of arr){
//     console.log( i );
// }
// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`${i} <br>`);
// }
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`${i} <br>`);
// }
// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`${i} <br>`);
// }
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i%2 === 0 ){
//         console.log(i);
//         document.write(`${i} <br>`);
//     }
// }

// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.
// for (let i = 0; i < 100; i++) {
//     if (i%2 === 1){
//         console.log(i);
//         document.write(`${i} <br>`)
//     }
//
// // }
// // - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let i = 0; i<=2; i++){
//     for (let sec = 0; sec<60; sec++){
//         console.log(`${i} minutes ${sec} seconds`);
//     }
// }
// // - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let i = 0; i<=2; i++){
//     for (let min=0; min<60; min++){
//         for (let sec = 0; sec < 60; sec++) {
//             document.write(`${i} hours ${min} minutes ${sec} seconds <br>`);
//         }
//     }
// }
// Додатково
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let word = '';
// for (let i = 0; i < arr.length; i++) {
//     word+= arr[i];
// }
// console.log(word);
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// let i =0;
// let word = '';
// while (i < arr.length){
//     word+= arr[i];
//     i++;
// }
// console.log(word);
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// let word = '';
// for (let i of arr){
//     word+= i;
//     console.log(i);
// }
// console.log(word);
// // - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr = ['a', 'b', 'c'];
// for (let i = 1 ; i <= arr.length; i++) {
//     arr.push(i);
// }
// console.log(arr);
// // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr = [1,2,3];
// let newArr=[];
// for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[arr.length-1-i];
// }
// console.log(newArr);
// // - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr = [1,2,3];
// for (let i = 4; i <=6 ; i++) {
//     arr.push(i);
// }
// console.log(arr);
// // - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr = [1,2,3];
// let i = 6;
// while (i>=4) {
//     arr.unshift(i);
//     i--;
// }
// console.log(arr);
// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr = ['js', 'css', 'jq'];
// let first = arr.shift();
// document.write(first);
// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'jq'];
// let last = arr.pop();
// document.write(last);
// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.slice(3);
// console.log(arr2);
// // // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.slice(0,2);
// console.log(arr2);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,2);
// console.log(arr);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3,0, 'a', 'b', 'c');
// console.log(arr);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,0, 'a', 'b');
// arr.splice(6,0, 'c');
// arr.splice( 10, 0, 'e');
// console.log(arr);
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr =[1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2===0) {
//         console.log(arr[i]);
//     }
// }
// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arr =[1,2,3,4,5,6,7,8,9,10];
// let arr2 =[];
// let i=0;
// while (i<arr.length){
//     arr2.push(arr[i]);
//     i++;
// }
// console.log(arr2);
// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr =[1,2,3,4,5,6,7,8,9,10];
// let arr2=[];
// for (let i = 0; i < arr.length; i++) {
//     arr2[i] = arr[i];
// }
// console.log(arr2);
// // Взяти файл template_2.html та працювати в ньому
// // - Напишіть код, який :
// // -- змінює колір тексту елемнту з ід main_header на будь-який інший
// document.getElementById('main_header').style.color = 'orange';
// // -- робить шириниу елементу ul 400 пікселів
// document.getElementsByTagName('ul')[0].style.width = '400px';
// // -- робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.getElementsByClassName('linkList');
// for (let linkListElement of linkList) {
//     linkListElement.style.width = '50%';
// }
// // -- отримує текст який зберігається в елементі з класом listElement2
// console.log(document.getElementsByClassName('listElement2')[0].innerText);
// // -- отримує всі елементи li та змінює ім колір фону на сірий
// let li = document.getElementsByTagName('li');
// for (const liElement of li) {
//     liElement.style.backgroundColor = 'grey';
// }
// // -- отримує всі елементи 'a' та додає їм клас anchor
// let anchor = document.getElementsByTagName('a');
// for (const a of anchor) {
//     a.classList.add('anchor');
// }
// // -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// for (let i = 0; i < anchor.length; i++) {
//     if (anchor[i].innerText === 'link3'){
//         anchor[i].style.fontSize = '40px';
//     }
// }
// // -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// for (const a of anchor) {
//     a.classList.add('element_XXX');
//     a.innerText = 'XXX'
// }
// // -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let sub = document.getElementsByClassName('sub-header');
// let color = prompt("Enter BackgroundColor");
// for (const subElement of sub) {
//     subElement.style.backgroundColor = color;
// }
// // -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let sub = document.getElementsByClassName('sub-header');
// let color = prompt("Enter Color of Text");
// for (const subElement of sub) {
//     if (subElement.innerText === 'content 2 segment' ){
//     subElement.style.backgroundColor = color;
//     }
// }
// // -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let text = prompt("Enter text");
// document.getElementsByClassName('content_1')[0].innerText = text;
// // -- отримати елементи p та змінити їм paddin на довільне значення
// let paragraphes = document.getElementsByTagName('p');
// for (const p of paragraphes) {
//     p.style.padding = '20px';
// }
//
// // -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let text2 = document.getElementsByClassName('text2');
// for (const text2Element of text2) {
//     text2Element.innerText = 'adfasdfasdfasfd';
// }

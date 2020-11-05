// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
//     let allH2 = document.getElementsByTagName('h2');
// let header = document.getElementById('content');
// let ul = document.createElement('ul');
// header.appendChild(ul);
// for (const li of allH2) {
//     let htmlliElement = document.createElement('li');
//     htmlliElement.innerText = li.innerText;
//     ul.appendChild(htmlliElement);
// }
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
// // -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// //     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// //     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// let wrap = document.createElement('div');
// wrap.style.backgroundColor = 'grey';
// wrap.style.marginTop = '60px'
// document.body.appendChild(wrap);
// for (let i = 0; i < rules.length; i++) {
//     let div = document.createElement('div');
//     div.classList.add(`rule${i+1}`);
//     wrap.appendChild(div);
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     h3.innerText = rules[i].title;
//     p.innerText = rules[i].body;
//     div.appendChild(h3);
//     div.appendChild(p);
// }
// // -Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// // - знайти всі елементі, які мають class
// let rule = document.getElementsByClassName('rule');
// // - знайти всі параграфи ,та змінити текст на hello oktenweb!
// let par = document.getElementsByTagName('p');
// for (const parElement of par) {
//     parElement.innerText = 'hello oktenweb!'
// }
// //     - знайти всі div та змінити ім колір на червоний
// let div = document.getElementsByTagName('div');
// for (const parElement of div) {
//     parElement.style.backgroundColor = 'red';
// }
// ==============================================
// Дан масив цілих чисел, знайдіть той, який зустрічається непарну кількість раз.Always буде тільки одне ціле число
//, яке зустрічається непарну кількість разів
// ==============================================
// let arr = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6];
// let frequency = {};
// for (const num of arr) {
//     frequency[num] ? frequency[num]++ : frequency[num] = 1;
// }
// let odd;
// for (const key in frequency) {
//     if (frequency[key] % 2 === 1) {
//         odd = key;
//         break;
//     }
// }
// console.log(odd);
// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
// let titleOfTag = ['<a>', '<div>', '<h1>', '<span>', '<input>', '<form>', '<option>', '<select>']
//
// function Tag(titleOfTag, action, attributes) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attributes = attributes || 'This tag dont  have attributes';
// }
//
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
// let attributes = [
//     {titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.'},
//     {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'}
// ];
// let a = new Tag(titleOfTag[0], action, attributes);
// console.log(a);
//
// action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.';
// attributes = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'},
// ];
// let div = new Tag(titleOfTag[1], action, attributes);
// console.log(div);
//
// action = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня';
// attributes = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега'}
// ];
// let h1 = new Tag(titleOfTag[2], action, attributes);
// console.log(h1);
//
//
// action = 'Тег <span> предназначен для определения строчных элементов документа';
// let span = new Tag(titleOfTag[3], action);
// console.log(span);
//
// action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.';
// attributes = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения'},
//     {titleOfAttr: 'border', actionOfAttr: 'Толщина рамки вокруг изображения'},
//     {titleOfAttr: 'form', actionOfAttr: 'Связывает поле с формой по её идентификатору.'}
// ];
// let input = new Tag(titleOfTag[4], action, attributes);
// console.log(input);
//
// action = 'Тег <form> устанавливает форму на веб-странице.';
// attributes = [
//     {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
//     {titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP'},
//     {titleOfAttr: 'name', actionOfAttr: 'Имя формы.'}
// ];
// let form = new Tag(titleOfTag[5], action, attributes);
// console.log(form);
//
// action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
// attributes = [
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//     {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'}
// ];
// let option = new Tag(titleOfTag[6], action, attributes);
// console.log(option);
//
// action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.';
// attributes = [
//     {titleOfAttr: 'name', actionOfAttr: 'Имя элемента для отправки на сервер или обращения через скрипты.'},
//     {titleOfAttr: 'required', actionOfAttr: 'Список обязателен для выбора перед отправкой формы'},
//     {titleOfAttr: 'size', actionOfAttr: 'Количество отображаемых строк списка.'}
// ];
// let select = new Tag(titleOfTag[7], action, attributes);
// console.log(select);

// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
// let titleOfTag = ['<a>', '<div>', '<h1>', '<span>', '<input>', '<form>', '<option>', '<select>']
//
// class Tag{
//     constructor(titleOfTag, action, attributes) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attributes = attributes || 'This tag dont  have attributes';
//     }
// }
//
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
// let attributes = [
//     {titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.'},
//     {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'}
// ];
// let a = new Tag(titleOfTag[0], action, attributes);
// console.log(a);
//
// action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.';
// attributes = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'},
// ];
// let div = new Tag(titleOfTag[1], action, attributes);
// console.log(div);
//
// action = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня';
// attributes = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега'}
// ];
// let h1 = new Tag(titleOfTag[2], action, attributes);
// console.log(h1);
//
//
// action = 'Тег <span> предназначен для определения строчных элементов документа';
// let span = new Tag(titleOfTag[3], action);
// console.log(span);
//
// action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.';
// attributes = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения'},
//     {titleOfAttr: 'border', actionOfAttr: 'Толщина рамки вокруг изображения'},
//     {titleOfAttr: 'form', actionOfAttr: 'Связывает поле с формой по её идентификатору.'}
// ];
// let input = new Tag(titleOfTag[4], action, attributes);
// console.log(input);
//
// action = 'Тег <form> устанавливает форму на веб-странице.';
// attributes = [
//     {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
//     {titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP'},
//     {titleOfAttr: 'name', actionOfAttr: 'Имя формы.'}
// ];
// let form = new Tag(titleOfTag[5], action, attributes);
// console.log(form);
//
// action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
// attributes = [
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//     {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'}
// ];
// let option = new Tag(titleOfTag[6], action, attributes);
// console.log(option);
//
// action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.';
// attributes = [
//     {titleOfAttr: 'name', actionOfAttr: 'Имя элемента для отправки на сервер или обращения через скрипты.'},
//     {titleOfAttr: 'required', actionOfAttr: 'Список обязателен для выбора перед отправкой формы'},
//     {titleOfAttr: 'size', actionOfAttr: 'Количество отображаемых строк списка.'}
// ];
// let select = new Tag(titleOfTag[7], action, attributes);
// console.log(select);

// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let car = {
//     model: 'A6',
//     manufacturer: 'Audi',
//     year: 2010,
//     maxSpeed: 240,
//     CapacityEngine: 2.5,
//     drive: function (){
//         console.log(`we drive ${this.maxSpeed}km an hour`);
//     },
//     info: function (){
//         console.log(this.manufacturer, this.model, this.year);
//     },
//     increaseMaxSpeed: function (newSpeed){
//        this.maxSpeed +   = newSpeed
//     },
//     changeYear: function (newValue){
//         this.year = newValue;
//     },
//     addDriver: function (driver) {
//         car.driver = driver;
//     }
// }
//
// let andrew = {
//     name: 'andrew',
//     age:  12,
//     experience: 31
// }
// car.addDriver(andrew);
// console.log(car);
//
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
//     this.manufacturer = manufacturer;
//     this.model = model;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function () {
//         console.log(`we drive ${maxSpeed}km an hour`);
//     }
//     this.info = function () {
//         console.log(`manufacturer: ${manufacturer}, model: ${model}, year: ${year}, maxSpeed: ${maxSpeed}`);
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car = new Car(2101, 'lada', 1977, 120, 1.6);
// console.log(car);
// car.increaseMaxSpeed(20);
// car.changeYear(2000);
// let Vasya = {name: 'Vasya', surname: 'Lopushanskyy', age: 24, wife: false};
// car.addDriver(Vasya);

// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// class Car{
//     constructor(model, manufacturer, year, maxSpeed, EngineCapacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.EngineCapacity = EngineCapacity;
//     }
//     drive(){
//         console.log(`We drive ${this.maxSpeed}km an hour`);
//     }
//     info(){
//         console.log(`model: ${this.model},manufacturer: ${this.manufacturer},year: ${this.year},maxSpeed: ${this.maxSpeed}`);
//     }
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     changeYear(newValue){
//         this.year = newValue;
//     }
//     addDriver(driver){
//         this.driver = driver;
//     }
// }
//
// let car = new Car(2101, 'lada', 1977, 120, 1.6);
// console.log(car);
// car.increaseMaxSpeed(20);
// car.changeYear(2000);
// let Vasya = {name: 'Vasya', surname: 'Lopushanskyy', age: 24, wife: false};
// car.addDriver(Vasya);
//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
//
// class Princess{
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let princesses = [];
// princesses.push(new Princess('alina', 18, 34));
// princesses.push(new Princess('karina', 16, 35));
// princesses.push(new Princess('anna', 17, 35));
// princesses.push(new Princess('Darya', 18, 36));
// princesses.push(new Princess('maria', 25, 37));
// princesses.push(new Princess('nastya', 23, 38));
// princesses.push(new Princess('alya', 22, 40));
// princesses.push(new Princess('margaruta', 18, 41));
// princesses.push(new Princess('lida', 19, 33));
// princesses.push(new Princess('yulia', 20, 37));
// princesses.push(new Princess('larysa', 19, 39));
// princesses.push(new Princess('lyudmyla', 21, 35));
// console.log(princesses);
//
// let prince = new Princess('Dmytro', 20, 36);
//
// for (const princess of princesses) {
//     if (prince.footSize === princess.footSize){
//         console.log(`${prince.name} and ${princess.name} will be married`);
//         break;
//     }
//
// }
//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
//
// function Cinderella(name, age, footSize){
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// let princesses = [];
// princesses.push(new Cinderella('alina', 18, 34));
// princesses.push(new Cinderella('karina', 16, 35));
// princesses.push(new Cinderella('anna', 17, 35));
// princesses.push(new Cinderella('Darya', 18, 36));
// princesses.push(new Cinderella('maria', 25, 37));
// princesses.push(new Cinderella('nastya', 23, 38));
// princesses.push(new Cinderella('alya', 22, 40));
// princesses.push(new Cinderella('margaruta', 18, 41));
// princesses.push(new Cinderella('lida', 19, 33));
// princesses.push(new Cinderella('yulia', 20, 37));
// princesses.push(new Cinderella('larysa', 19, 39));
// princesses.push(new Cinderella('lyudmyla', 21, 35));
// console.log(princesses);
//
// let prince = new Cinderella('Anatoliy', 20, 40);
//
// for (const princess of princesses) {
//     if (prince.footSize === princess.footSize){
//         console.log(`${prince.name} and ${princess.name} will be married`);
//         break;
//     }
// }
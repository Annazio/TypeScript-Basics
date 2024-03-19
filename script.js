// let a = 9
var a = 78;
var b = "fififi";
var d = true;
var foo = 6;
var names = ["mike", "alice", "bob"];
var ages = [1, 3, 6];
ages.push(8);
// Кортеж
var mix = [2, "jhkgh", 5];
// Массив может содержать и строки и числа
// | или
//Грязный массив 
var renders = [4, 5, "hello", 2, "hi", true];
// Чистый массив
var renders2 = [4, 5, 6];
// any
// лучше не использовать!!!!!!!!  если тоьлко нет времени, но потом вернуться и переписать
// а иначе пиши на js!
var g = 5;
var anyArr = [2, "jhkgh", 5];
// function
// после скобок написать тип данных какой возвращается
function greet() {
    return "hi";
}
// когда функция ничего не возвращает - void
function greeting() {
}
function greetings() {
    return 45;
}
var greet2 = function () {
    if (1 === 1)
        return 5;
};
// нужно писать тип аргумента и тип того что функция возвращает
function greet3(name, type) {
    return name + "hi";
}
// в коллбэке необязательны типы, но можно и написать, иногда нужно, если специально что-то другое хочешь написать ???
ages.map(function (el) {
    return el * 2;
});
//  rare use
// что если мои координаты объект: такая возможность есть, но так делать не будем
function getCoords(coords) {
}
// более грамотно
// total? - optional property опциональный аргумент, может быть может не быть
function getCoords2(_a) {
    var lat = _a.lat, long = _a.long;
}
// class Dog {
//     constructor({age, name}){
//         this.age = age;
//         this.name = name;
//     }
// }
var userId = 5;
userId = "hello";
function printId(id) {
    if (typeof id == "string") {
        // ниже уже будут только предложено все что со строкой только связано 
        console.log(id.toLocaleUpperCase());
    }
    else {
        // ниже все только для числа
        console.log(id);
    }
}
function helloUser(user) {
    if (Array.isArray(user)) {
        // ниже все методы массива
        console.log(user.join(""));
    }
    else {
        // ниже все методы строк
        console.log(user + "hi");
    }
}
// TYPES & INTERFACES
// это лучше избегать
// обычный объект js, не можем переиспользовать
function getCoords5(coords) { }
// если ожидаем на входе массив таких объектов
// аргументы тоже можно указывать как опциональные
function getUser(userData) {
    return true;
}
getUser([
    { id: 456, name: "ghfk", admin: true },
    { id: 456, name: "ghfk" }
]);
getUser();
function getCoords6(coord) { }
function getCoords7(coord) { }
var admin = "gfhsdj";
var user5 = {
    id: 15,
    name: "Bob",
    admin: true
};
var catTom = {
    name: "Tom",
    tail: true
};
var dog1 = {
    name: "dog1"
};
var bird1 = {
    name: "Bird1",
    tail: true
};
// Практика
// js object  сделать ему интерфэйс
var user = {
    name: "Bob",
    age: 24,
    address: {
        city: " Berlin",
        country: "Germany"
    },
    friends: ["Mike", "Alice", "Greg"]
};
var user125 = {
    name: "Bob",
    age: 24,
    address: {
        city: "Berlin",
        country: "Germany"
    },
    friends: ["Mike", "Alice", "Greg"]
};
// function fetchDataUsers(): validateResUsers {
//     return fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         return response.json();
//     });
// }
// напрямую подключить нельзя ts нельзя как script.js потому что это не отдельный язык программировния
// нужно в терминале писать tsc index.ts. Появится файл index.js и уже скомпилированный файл нужно подключить.
// после изменений нужно заново компилировать 
// Literal Types
// в основном на бэкенде, на клиенте очень редко 
var s = "hello";
// это литеральный тип
// создаетсяяя через const
// если объявляем через const и не указываем тип явно, создаетс литеральный тип 
// переменная которая никогда не меняется
var t = "hello";
// такое технически невозможно сломать
function moveDog(direction) {
    switch (direction) {
        case "left":
            return -1;
        case "right":
            return 1;
        default:
            return 0;
    }
}
moveDog("left");
function connect(connection) {
}
connect("default");
var connection = {
    host: "localhost",
    protocol: "https",
};
function connect1(host, protocol) { }
connect1(connection.host, connection.protocol);
var y = 5;
// 3 способа
var c = y;
var r = y;
var p = y;
//   немного невалидно для jsx иначе путается с разметкой
var l = y;
var Direction1;
(function (Direction1) {
    Direction1["Left"] = "left";
    Direction1["Right"] = "right";
})(Direction1 || (Direction1 = {}));
function moveDog5(direction) {
    switch (direction) {
        case Direction1.Left:
            return -1;
        case Direction1.Right:
            return 1;
    }
}
//   ====================Generics===========
// function log(obj: string | number): string | number {
//   return obj;
// }
// то что придет в качестве аргумента то и возвращено будет в ретурн
// динамическая типизация
function log2(obj) {
    return obj;
}
log2("hello");
log2(5);
function log3(obj, arr) {
    return arr;
}
log3("ls", [true]);
function log4(obj, arr) {
    arr.length;
    // Object.keys(obj);
    return arr;
}
// =======================================

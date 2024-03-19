// let a = 9


let a: number = 78;
let b: string = "fififi" 

let d: boolean = true;

let foo: boolean | number = 6
let names: string[] = ["mike", "alice", "bob"]

let ages: number[] = [1, 3, 6]
ages.push(8)

// Кортеж
let mix: [number, string, number] = [2, "jhkgh", 5]

// Массив может содержать и строки и числа
// | или
//Грязный массив 
let renders: (string | number | boolean)[] = [4, 5, "hello", 2, "hi", true]
// Чистый массив
let renders2: string[] | boolean[] | number[] = [4, 5, 6]

// any
// лучше не использовать!!!!!!!!  если тоьлко нет времени, но потом вернуться и переписать
// а иначе пиши на js!
let g: any = 5
let anyArr: any[] = [2, "jhkgh", 5]




// function
// после скобок написать тип данных какой возвращается
function greet() :string{
   return "hi"
}

// когда функция ничего не возвращает - void
function greeting() :void{
 }


 function greetings() :boolean | number{
    return 45;
}

const greet2 = (): void | boolean | number | string[] | (string | number) [] => {
    if(1===1) return 5
}

// нужно писать тип аргумента и тип того что функция возвращает
function greet3(name: string, type: number): string{
    return name + "hi";
}
// в коллбэке необязательны типы, но можно и написать, иногда нужно, если специально что-то другое хочешь написать ???
ages.map((el)=>{
    return el*2;
})

//  rare use
// что если мои координаты объект: такая возможность есть, но так делать не будем
function getCoords(coords: {lat : number; long: number}){
}
// более грамотно
// total? - optional property опциональный аргумент, может быть может не быть
function getCoords2({lat, long }: {lat : number; long: number; total?: "string"}){
}

// class Dog {
//     constructor({age, name}){
//         this.age = age;
//         this.name = name;
//     }
// }


let userId: number | string = 5;

userId = "hello"

function printId(id: number | string){
    if(typeof id == "string"){
        // ниже уже будут только предложено все что со строкой только связано 
        console.log(id.toLocaleUpperCase()); 
    }else{
        // ниже все только для числа
        console.log(id);   
    }        
    }

    function helloUser(user: string | string[]){
        if(Array.isArray(user)){
            // ниже все методы массива
            console.log(user.join(""));
        } else {
            // ниже все методы строк
            console.log(user + "hi");
            
        }
        }
    
        // TYPES & INTERFACES

        // это лучше избегать
        // обычный объект js, не можем переиспользовать
        function getCoords5(coords: {lat : number; long: number}){}

        // есть другое решение
        // это можно переиспользоваьть
        type coords ={lat: number; long: number};

        type coords2 ={name: number; ip: number};

        type user = {
            id: number,
            name: string,
            admin?: boolean
        }
// если ожидаем на входе массив таких объектов
// аргументы тоже можно указывать как опциональные
        function getUser(userData?: user[]): boolean {
            return true
        }

        getUser([
            {id: 456, name: "ghfk", admin: true },
            {id: 456, name: "ghfk" }
        ])

        getUser()

        function getCoords6(coord: coords){}
        
        function getCoords7(coord: coords | coords2){}
        

// UNION TYPES
// отличие от интерфейса, что можно указывать и примитив
// служат для экономии места

type unionTypeOfUser = coords | coords2[] | any
type unionTypeOfUser2 = string | number | undefined |null | user[] |user | unionTypeOfUser

let admin: unionTypeOfUser = "gfhsdj"




// INTERFACES
// в тип данных не входят, но встречаются так часто, что их воспринимают как типы данных
// все интерфейсы начинаются с I
// = не нужно 
interface IUser {
    id: number,
    name: string,
    admin: true 
}

let user5: IUser ={
    id: 15,
    name: "Bob",
    admin: true
}

//  в чем же разница ки когда что использовать
// 1. интерфейс не принимает примитивы как тип 
//    нельзя написатьть interface IUser = string
// 2. интерфейсы можно комбинироваьт, т.е экстендить как классы


interface Animal {
    name: string;
}

interface Cat extends Animal {
    tail?: boolean;
}

let catTom: Cat ={
   name: "Tom",
   tail: true
}

// но тайп может имитировать экстенд
// но смысла нет, у нас ведь есть интерфейсы

type Animal1 ={
    name: string;
}

type Dog = Animal1 & {
    tail?: boolean;
}

const dog1: Dog ={
    name: "dog1"
}

// еще особенность интерфэйсов - то что они могут мерджиться
// это не ошибка архитектуры, скорее особенность которую можно использовать
// с тайпами такое невозможно
interface Bird {
    name: string;
}

interface Bird {
    tail: boolean;
}

const bird1: Bird ={
    name: "Bird1",
    tail: true
}


// Практика
// js object  сделать ему интерфэйс

const user ={
    name: "Bob",
    age: 24,
    address: {
        city: " Berlin",
        country: "Germany"
    },
    friends: ["Mike", "Alice", "Greg"]
}

// обычно сетевые запросы реализуются через интерфэйс

interface IUser10 {
    name: string;
    age: number;
    address: IAddress;
    friends: string []
}

// обычно сетевые запросы реализуются через интерфэйс
interface IAddress {
    city: string;
    country: string;
}

const user125: IUser10 ={
    name: "Bob",
    age: 24,
    address: {
        city: "Berlin",
        country: "Germany"
    },
    friends: ["Mike", "Alice", "Greg"]
}



// Beispiel 2
interface IUserGeo{
   lat: string;
   lng: string;
}

interface JSONAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
//   может прийти а может не прийти с бэкенда. 
// Обычно не geo? (типа опция) Потому что оно на бэкенде либо string либо null, а не undefined в базе данных заполнено 
  geo: IUserGeo | null;
}


interface IUserCompany{
    name: string;
    catchPhrase: string;
    bs: string;
}

interface IJSONUser{
    id: number;
    name: string;
    username: string;
    email: string;
    address: JSONAddress;
    phone: string;
    website: string;
    company: IUserCompany;
}

type rejectType = string | null;

type validateResUsers = IJSONUser[] | rejectType | null;

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

let s: string = "hello"

// это литеральный тип
// создаетсяяя через const
// если объявляем через const и не указываем тип явно, создаетс литеральный тип 
// переменная которая никогда не меняется
const t = "hello"


type direction = "left" | "right";


// такое технически невозможно сломать
function moveDog(direction: direction): 1 | -1 | 0 {
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



interface ICnnection {
    host: string;
    port: number
}

    function connect(connection: ICnnection | "default") {

    }

    connect("default");


    const connection = {
          host: "localhost",
          protocol: "https" as "https",
        };
        
        function connect1(host: string, protocol: "http" | "https") {}
        
        connect1(connection.host, connection.protocol);


        let y: any = 5
        // 3 способа
        let c: number = y;
        let r = y as number;
        let p = <number | string>y;
    //   немного невалидно для jsx иначе путается с разметкой
        let l = <number>y; 

// ================================
// литералы часто заменяются enam
// автоматически формирует значение
// на клиенте редко используется, но возможно
type roles = "admin" | "manager" | "lawyer";

enum Direction1 {
  Left = "left",
  Right = "right",
}

function moveDog5(direction: Direction1) {
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
function log2<T>(obj: T): T {
    return obj;
  }
  
  log2<string>("hello");
  log2<number>(5);
  
  function log3<T, K>(obj: T, arr: K[]): K[] {
    return arr;
  }
  
  log3<string, boolean>("ls", [true]);
  
  function log4<T, K>(obj: T, arr: K[]): K[] {
    arr.length;
    // Object.keys(obj);
    return arr;
  }
  
  // =======================================
  
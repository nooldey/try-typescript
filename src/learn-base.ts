
/*----------------------------------------------------*/
/*----------------------#类型注解------------------------------*/
/*
function hello(compiler: string) {
    console.log(`Hello from ${compiler}`);
}
hello("TypeScript");
*/

/*---------------------------------------------------*/
/*-----------------------#接口----------------------------*/
/* 利用接口可以对值的结构进行类型检查，而不是单纯对单一的值进行类型检查，适合对约定的结构进行统一管理检查 */
/*
interface People {
    firstName: string;
    lastName: string;
}
function greeter(person:People) {
    console.log("Hello, " + person.firstName + " " + person.lastName);
}
var user = {firstName: "Nooldey", lastName: "One"};
greeter(user);
*/

// 一个必填属性，一个可选属性
/*
interface newPeople {
    name: string;
    age?: number;
}
function kid(person:newPeople) {
    console.log(person)
}
// 一个错误的栗子
// let boy = {
//     "age": 6
// }
// kid(boy)
// 一个兼容的栗子
let girl = {
    "name": "小女孩",
    "age": 3,
    "father": "man"
}
kid(girl)
*/

// 声明函数类型: 创建一个函数接口，实现判断字符串中特定字符的存在
/*interface searchFunc {
    (source:string,subString: string): boolean;
}
let mySearch: searchFunc;
mySearch = (s:string,sub:string) => {
    return s.search(sub) != -1;
}
console.log(mySearch("My name is Nooldey","nooldey"))
console.log(mySearch("My name is Nooldey","Nooldey"))*/

/*---------------------------------------------------*/
/*----------------------#类与继承-----------------------------*/
/*
class Person{
    public name:string;
    age: number;
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(this.name+this.age)
    }
}

// 继承
class Student extends Person {
    gender: string;
    constructor(gender:string){
        super("nooldey",26);
        this.gender = gender;
    }
    print(){
        console.log(this.name+this.age+this.gender)
    }
}
let person = new Person("nooldey2",30);
person.print();
let student = new Student("male");
student.print();
*/

/*---------------------------------------------------*/
/*----------------------#类型-----------------------------*/
// 普通类型
/*
let firstName: string = "nooldey";
let checked: boolean = false;
let count: number = 10;
let list: number[] = [1,2,3,4,5];
let list2: Array<number> = [1,2,3,4,5];*/
// 一个错误的栗子:
// let list3: string[] = [1,2,3,4,5,6];
// 枚举enum
/*enum Role {employee = 3,Manager,Admin}
let role: Role = Role.employee;
console.log(role)*/
// 任何类型any
/*let notSure:any = 10;
notSure = "nooldey";*/
// 一个错误的栗子:给声明为字符串的变量赋予一个number的值
// let beSure:string = "hello"; beSure = 10;
// 空值void
/*const echoName = ():void => {
    console.log("hello i am nooldey")
}
echoName();
*/

/*---------------------------------------------------*/
/*----------------------#函数-----------------------------*/
/*
function add(x:string,y:string):string {
    return "hello " + x + " nooldey " + y;
}

let add2 = function(x:string,y:string):string {
    return "hello " + x + " nooldey " + y;    
}

let add3: (x:string,y:string) => string = function(x:string,y:string):string {
    return "hello " + x + " nooldey " + y;    
}
// 可选参数? 必填参数不能跟在可选参数的后面传入--可选参数应在传入变量的最后位置
// 默认参数undefined
function elog(x:string,y?:string) {
    console.log(y ? x + " " + y : x)
}
elog("nooldey")  // 传入x
elog("I am","nooldey")  //传入x,y
elog(undefined,"nooldey")  // 传入y
*/

/*---------------------------------------------------*/
/*----------------------# 存储器-----------------------------*/
/*
class People {
    private _name: string;
    private _age: number;
    get name():string {
        return this._name;
    }
    set name(value:string) {
        this._name = value;
    }
    get age():number {
        return this._age;
    }
    set age(age:number) {
        if (age<0 || age>100) {
            console.log("年龄在0-100之间")
            return;
        }
        this._age = age;
    }
}

let people = new People();
people.name = "nooldey";
people.age = 26
console.log(people)
*/

/*---------------------------------------------------*/
/*------------------#试用---------------------------------*/
/*
let add = function (num1: number,num2: number):number {
    return num1 + num2;
}
let sum = add (25,45)
console.log(sum)
*/
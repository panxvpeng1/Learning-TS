//类
class Greeter {
    greeting:string;
    constructor(message:string) {
        this.greeting = message;
    }
    greet() {
        return `hello ${this.greeting}`;
    }
}
let greeter = new Greeter('world');


//继承
class Animal {
    move(leg:number = 0) {
        console.log(`Animal move ${leg}`)
    }
}
class Dog extends Animal{
    brak() {
        console.log(`woof woof!`);
    }
}
const dog = new Dog();
dog.brak();
dog.move(111);
dog.brak();


//super关键字
class Animal {
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    move(leg:number = 0) {
        console.log(`Animal move ${leg}`)
    }
}
class Snake extends Animal{
    constructor(name:string) {
        super(name);
    }
    move(leg = 5) {
        console.log('Dog move !');
        super.move(leg)
    }
}
class Horse extends Animal {
    constructor(name:string) {
        super(name);
    }
    move(leg = 8) {
        console.log('Horse move')
        super.move(leg);
    }
}
let daidai = new Snake('daidai');
let qianlima = new Horse('qianlimna');
daidai.move();
qianlima.move();


//(公共public，私有private，受保护protected) 修饰符
//1.私有
class Animal {
    private name:string;
    constructor(theName:string) {
        this.name = theName;
    }
}
class Rhino extends Animal {
    constructor(){super('Rhino')}
}
class Employee {
    private name:string;
    constructor(theName:string) {
        this.name = theName
    }
}
let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");
// rhino.name // error  Property 'name' is private and only accessible within class 'Animal'
animal = rhino;
// animal = employee;// error  Type 'Employee' is not assignable to type 'Animal'.Types have separate declarations of a private property 'name'
//2.受保护
class Preson {
    protected name:string;
    constructor(name:string) {
        this.name = name;
    }
}
class Man extends Preson {
    private department:string;
    constructor(name:string,department:string) {
        super(name);
        this.department = department;
    }
    public getjob() {
        return `My name is ${this.name} work in ${this.department}`;
    }
}
let pxp = new Man('pxp','sales');
console.log(pxp.getjob());
// console.log(pxp.name); // error  Property 'name' is protected and only accessible within class 'Preson' and its subclasses.
//公共
class Food {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(flavour: number) {
        console.log(`${this.name} feel ${flavour}.`);
    }
}


//readonly修饰符
class Octopus {
    readonly name:string
    readonly numberofleg:number = 8;
    constructor(theName:string) {
        this.name = theName;
    }
}
let dad = new Octopus('pxp');
// dad.name = 'pxp1'; // error Cannot assign to 'name' because it is a read-only property


//参数属性
class Book {
    constructor(public name:string) {//
    }
}


//存储器
let passcode = 'secret passcode';
class worker {
    private _fullname:string;
    get fullname():string {
        return this._fullname;
    }
    set fullname(value:string) {
        if(passcode && passcode == 'secret passcode') {
            this._fullname = value;
        }else {
            console.log('sorry unauthorized updata of work');
        }
    }
}
let work1 = new worker();
work1.fullname = 'pxp'
console.log(work1.fullname)


//静态属性
class Grid {
    static origin = {x:12,y:777};
    constructor(public scale:number){
        this.scale = scale
    }
    calculer(point:{x:number,y:number}) {
        let xdist = (point.x-Grid.origin.x);
        let ydist = (point.y-Grid.origin.y);
        return (Math.sqrt(xdist*xdist+ydist*ydist)/this.scale).toFixed(2);
    }
    
}
let grid1 = new Grid(11);
let grid2 = new Grid(4);
console.log(grid1.calculer({x:11,y:43}));
console.log(grid2.calculer({x:111,y:433}));


//抽象类
abstract class Department {
    constructor(public name:string) {

    }
    printName():void {
        console.log('name '+this.name);
    }
    abstract printMessage():void;
}
class AccountDpartment extends Department {
    constructor() {
        super('Accounting And Auditing');
    }
    printMessage():void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports():void {
        console.log('Generating accounting reports...')
    }
}
let work2:Department;
work2 = new AccountDpartment();
work2.name = 'pxp';
work2.printName();
// work2.generateReports(); // error Property 'generateReports' does not exist on type 'Department'


//高级技巧 构造函数
class Greeter {
    static StaticValue = 'hello';
    greeting:string;
    constructor(message:string) {
        this.greeting = message;
    }
    greet() {
        return "hello "+this.greeting;
    }
}
let greeter1:Greeter;
greeter1 = new Greeter('pxp');
console.log(greeter1.greet());
console.log(Greeter.StaticValue);
//将Greeter编译后查看js
// var Greeter = /** @class */ (function () {
//     function Greeter(message) {
//         this.greeting = message;
//     }
//     Greeter.prototype.greet = function () {
//         return "hello " + this.greeting;
//     };
//     Greeter.StaticValue = 'hello';
//     return Greeter;
// }());
// var greeter1;
// greeter1 = new Greeter('pxp');
// console.log(greeter1.greet());
// console.log(Greeter.StaticValue);


//把类当做接口使用
class Point {
    x:number;
    y:number;
}
interface Point3d extends Point {
    z:number;
}
let point3d:Point3d;
point3d = {x:1,y:2,z:4}














































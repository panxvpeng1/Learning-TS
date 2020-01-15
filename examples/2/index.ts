//参数接口
interface labelvalue {
    label:string;
}
function printLabel(labelobj:labelvalue){
    console.log(labelobj.label);
}
let myobj = {size:100,label:'ppaa'}
printLabel(myobj);


//可选属性
interface squareconfig {
    color?:string;
    width?:number;
}
function createsquare(config:squareconfig):{color:string;area:number} {
    let newsquare = {color:'white',area:1200};
    if(config.color){
        newsquare.color = config.color
    }
    if(config.width){
        newsquare.area = config.width*config.width
    }
    return newsquare;
}
let mysquare = createsquare({color:'white'});
console.log(mysquare)


//只读属性
interface point {
    readonly x:number;
    readonly y:number;
}
let p1:point = {x:10,y:20};//p1.x=5 //error
let a:number[] = [1,2,3,4];
let or:ReadonlyArray<number> = a;//ro[0] = 12 // error Cannot find name 'ro'


//额外的属性检查
interface squareconfig {
    color?:string;
    width?:number;
    [index:string]:any;//索引签名
}
function createsquare(config:squareconfig):{color:string;area:number} {
    let newsquare = {color:'white',area:1200};
    if(config.color){
        newsquare.color = config.color
    }
    if(config.width){
        newsquare.area = config.width*config.width
    }
    return newsquare;
}
let mysquare = createsquare({coluor:'white1'});//coluor既不是color也不是width，通过索引签名来解决报错
console.log(mysquare)


//函数类型
interface searchfun {
    (source:string,substring:string):boolean;
}
let mysearch:searchfun;
mysearch = function(source:string,substring:string) {//函数中的参数名不需要和接口中定义的相同
    let result = source.search(substring);
    return result > -1;
}
console.log(mysearch('123nihao你好','你'));


//可索引类型
interface stringarray {
    [index:number]:string;
}
let myarray:stringarray;
myarray = ['nijhao','wo','zala'];
let mystr:string;
mystr = myarray[1]
console.log(mystr);

// class animal {
//     name:string;
// }
// class dog extends animal {
//     breed:string;
// }
// interface Notokay {//error 错误原因：数字索引的返回值必须是字符串索引返回值类型的子类型
//     [x:number]:animal;
//     [x:string]:dog;
// }

// interface NumberDictionary {
//     [index:string]:number;
//     length:number;
//     name:string;//error 错误原因：name的类型和索引返回值类型不匹配
// }
// interface ReadonlyStringArray {
//     readonly [index:number]:string;
// }
// let myarray:ReadonlyStringArray;
// myarray = ["pxp"];
// myarray[0] = '1'// error 错误原因：readonly类型不可修改值


//类 类型 实现接口
interface clockinterface {
    currenttime:Date;
    settime(d:Date);
}
class clock implements clockinterface {
    currenttime:Date;
    settime(d:Date){
        this.currenttime = d;
    }
    constructor(h:number,m:number){
        
    }
}


//类静态部分和实例部分的区别
interface clockconstructor {
    new (hour:number,minute:number):clockinterface;
}
interface clockinterface {
    tick()
}
class digitclock implements clockinterface {
    constructor(h:number,m:number) {

    }
    tick(){
        console.log('ppxxpp');
    }
}
class vueclock implements clockinterface {
    constructor(h:number,m:number) {

    }
    tick() {
        console.log('vue');
    }
}
function createclock(ctor:clockconstructor,hour:number,minute:number):clockinterface {
    return new ctor(hour,minute);
} 
let digit = createclock(digitclock,12,12);
let vue = createclock(vueclock,5,5);
console.log(digit.tick());
console.log(vue.tick());


//继承借口
interface Shape {
    color:string;
}
interface Senstroke {
    penwidth:number;
}
interface Square extends Shape,Senstroke {
    sidelength:number;
}
let square = {} as Square;
square.color = 'blue';
square.penwidth = 11;
square.sidelength = 4;
console.log(square);


//混合类型
interface Counter {
    (start:number):string;
    interval:number;
    reset():void;
}
function getCounter():Counter {
    let counter = <Counter>function (start:number) {

    };
    counter.interval = 123;
    counter.reset = function():void {};
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 1


//接口继承类
class Control {
    private state:any;
    pxp():void{
        console.log('pxp')
    };
}
interface SelectableControl extends Control {
    select():void;
}
class button extends Control implements SelectableControl {
    select(){}
}
class testbox extends Control {

}
class img extends Control implements SelectableControl {
    select(){}
}








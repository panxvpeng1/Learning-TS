// //泛型
// function identify<T>(arg:T):T {
//     return arg
// }
// let output = identify<string>('mtstring');
// //一般调用利用类型推断
// let output2 = identify('mystring');


// //使用泛型变量
// function identify<T>(arg:T):T {
//     console.log(arg.length);// error Property 'length' does not exist on type 'T'
//     return arg;
// }
// function logging1<T>(arg:T[]):T[] {
//     console.log(arg.length);
//     return arg;
// }
// function logging2<T>(arg:Array<T>):T[] {
//     console.log(arg.length);
//     return arg;
// }


// //泛型类型
// function identity<T>(arg:T):T {
//     return arg;
// }
// let myidentity1:<T>(arg:T) => T = identity;
// let myIdentity2:<U>(arg:U) => U = identity;
// //接口里使用泛型
// interface GenericIdentityFn<T> {
//     (arg:T):T;
// }
// function identity1<T>(arg:T):T {
//     return arg;
// }
// let myIdentity:GenericIdentityFn<number> = identity1;


//泛型类
// class GenericNumber<T> {
//     zeroValue:T;
//     add:(x:T,y:T) => T;
// }
// let myg = new GenericNumber<number>();
// myg.zeroValue = 0;
// myg.add = function(x,y) {return x+y};


// //泛型约束
// interface Lengthwise {
//     length:number;
// }
// function loggingIndextity<T extends Lengthwise>(arg:T):T {
//     console.log(arg.length);
//     return arg
// }


// //在泛型约束中使用类型参数
// function getProperty<T,K extends keyof T>(obj:T,key:K) {
//     return obj[key];
// }
// let x = {a:1,b:2,c:3,d:4};
// getProperty(x,'a');
// // getProperty(x,'m'); // error Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'


// //在泛型里使用类类型
// class BeeKeeper {
//     hasMask:number = 1;
// }
// class ZooKeeper  {
//     nametag:string = '123';
// }
// class Animal {
//     numLegs:string = '';
// }
// class Bee extends Animal {
//     keeper: BeeKeeper;
// }
// class Lion extends Animal {
//     keeper: ZooKeeper;
// }

// function createInstance<A extends Animal>(c: new () => A): A {
//     return new c();
// }
// console.log(createInstance(Lion).keeper)
// // createInstance(Lion).keeper;  // typechecks!
// // createInstance(Bee).keeper;   // typechecks!
// /** 
//  * c:{new():T}里的'new'是Constructor Type Literal，下面new c()里的'new'是new operator，二者是不同的东西。
//  * c:{new():T} 和 c:new()=>T是一样的，后者是前者的简写，意即C的类型是对象类型且这个对象包含返回类型是T的构造函数。
//  * 注意，':'后面是Type Information，这里的'=>'不是arrow function，只是用来标明函数返回类型。
//  */






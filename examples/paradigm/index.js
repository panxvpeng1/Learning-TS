// //泛型
// function identify<T>(arg:T):T {
//     return arg
// }
// let output = identify<string>('mtstring');
// //一般调用利用类型推断
// let output2 = identify('mystring');
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//在泛型里使用类类型
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
        this.hasMask = 1;
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
        this.nametag = '123';
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.numLegs = '';
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
console.log(createInstance(Lion).keeper);
// createInstance(Lion).keeper;  // typechecks!
// createInstance(Bee).keeper;   // typechecks!
/**
 * c:{new():T}里的'new'是Constructor Type Literal，下面new c()里的'new'是new operator，二者是不同的东西。
 * c:{new():T} 和 c:new()=>T是一样的，后者是前者的简写，意即C的类型是对象类型且这个对象包含返回类型是T的构造函数。
 * 注意，':'后面是Type Information，这里的'=>'不是arrow function，只是用来标明函数返回类型。
 */

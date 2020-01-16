// //函数(named,Anonymous)
// function add(x,y) {
//     return x+y;
// }
// let myadd = function(x,y){return x+y}
// //为函数定义类型
// function add(x:number,y:number):number {
//     return x+y;
// }
// let myadd = function(x:number,y:number):number {return x+y}
// //书写完整函数类型
// let myadd:(baseValue:number,increment:number) => number = 
//     function(x:number,y:number):number {return x+y}
// //函数推断类型
// ley myadd:(baseValue:number,increment:number) => number = 
//     function(x,y){return x+y}
// //可选参数 , 默认参数 , 剩余参数
// //可选参数
// function buildname(firstname:string,lastname?:string):string {
//      if(lastname) {
//          return firstname+lastname;
//      }else{
//          return firstname;
//      }
// }
// //默认参数
// function buildhouse(firstname:string,lastname:string = 'xp') {
//     return firstname+lastname;
// }
// let house = buildhouse('p');
// console.log(house);
// //注意当第一个参数有默认参数第二个参数既不是可选参数有没有默认参数是要以（undefined，（参数））格式输入
// function buildcountry(firstname:string = 'zhong',lastname:string) {
//     return firstname+lastname;
// }
// let mycountry = buildcountry(undefined,' guo');
// console.log(mycountry);
// //剩余参数(利用的是function的argument)
// function buildhuman(firstname:string,...lastname:string[]) {
//     return firstname+lastname.join(' ');
// }
// let human1 = buildhuman('p ','x','p');
// console.log(human1);
//this
// let deck0 = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function() {
//         return function() {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};//此处的this指向为window （原因在67行）
//         }
//     }
// }
// let cardPicker = deck0.createCardPicker();//保存createCardPicker
// let pickedCard = cardPicker();// 执行createCardPicker由于在全局环境下执行所以this指向window
// // alert("card: " + pickedCard.card + " of " + pickedCard.suit); // error （原因在67行）
// //改为箭头函数 我们可以在函数被返回时就绑好正确的this。 这样的话，无论之后怎么使用它，都会引用绑定的‘deck1’对象
// let deck1 = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function() {
//         // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }
// let cardPicker1 = deck1.createCardPicker();
// let pickedCard1 = cardPicker1();
// console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
// //归对象引入接口
// interface Card {
//     suit:string;
//     card:number;
// }
// interface Deck {
//     suits:string[];
//     cards:number[];
//     createCardPicker(this:Deck):() => Card;
// }
// let deck2: Deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     // NOTE: The function now explicitly specifies that its callee must be of type Deck
//     createCardPicker: function(this: Deck) {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// alert("card: " + pickedCard.card + " of " + pickedCard.suit);
// //回调函数里的this参数（箭头函数不会捕获this，所以你总是可以把它们传给期望this: void的函数）
// class Handler {
//     info: string;
//     onClickGood(this: void, e: Event) {
//         // can't use this here because it's of type void!
//         console.log('clicked!');
//     }
// }
// let h = new Handler();
// uiElement.addClickListener(h.onClickGood);
//重载
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickcard(x) {
    if (typeof x === 'object') {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x === 'number') {
        var pickSuit = Math.floor(x / 13);
        return { suit: suits[pickSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickcard(myDeck)];
console.log(pickedCard1);
var pickCard2 = pickcard(3);
console.log(pickCard2);

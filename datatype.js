"use strict";
// var age = 10;
// const pi = 3.14158;
// console.log(typeof pi);

// if (parseInt(age)) {
//     console.log("Age is number");
// } //NaN

// var myage = "AAA";
// var myage2 = parseInt(myage);

// var contact = "phone 0902209011 Cuong";
// var phonepos = contact.search(/[0-9]+/);
// console.log("Phone position = ", phonepos);

// var str = "Apple, Banana, Kiwi";
// var res = str.slice(7, 13);
// console.log(res);

// var res2 = str.slice(-12, -6);
// console.log(res2);

// console.log(str.substring(7, 13));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// var fruits = str.split(", ");
// console.log(fruits);
// console.log(str.concat(", ", "Lemon"));

// var love = "LOVE";
// var result = "";
// for (var i = love.length -1 ; i >= 0; i--){
//     result += love.charAt(i);
// }
// console.log(result);

// var a = 1,
//     b = { foo: 'bar' },
//     c = "Rock start",
//     a_ = a,
//     b_ = b,
//     c_ = c;

// //non object type params are passed by value
// //object type params are passed by reference
// function makeChange(_a, _b, _c) {
//     _a = 2;
//     //arguments[1] = { foo: 'Fun qua' };
//     _b.foo = 'Fun qua';
//     _c = "Film Star";
// }
// makeChange(a, b, c);

// console.log(a === a_); //=> true
// console.log(b === b_); //=> true
// console.log(c === c_); //=> true

// console.log('a = ', a, ', b = ', b, ', c =', c);

// function swap(a, b) {
//     var tmp = a;
//     a = b;
//     b = tmp; //assign tmp to b
// }

// var x = 1, y = 2;
// swap(x, y);

// console.log("x is " + x + " y is " + y); // "x is 1 y is 2"

// function swap2(object) {
//     var tmp = object.a;
//     object.a = object.b;
//     object.b = tmp; //assign tmp to b
// }
// var obj = {a: 1, b: 2};
// swap2(obj);
// console.log('after swap : ', obj);

// function swap3(object, a, b) {
//     var tmp = object[a];
//     object[a] = object[b];
//     object[b] = tmp; //assign tmp to b
// }
// var obj2 = {a: 1, b: 2};
// swap3(obj2, 'a', 'b');
// console.log('after swap : ', obj);

// var flight = {status: "Flying"};

// //Object is passed by reference by default
// var byRefFlight = flight;

// //This code really copies object to other instance
// var byCopyFlight = Object.create(flight);

// byRefFlight.status = "Landing";
// console.log('flight.status = ' + flight.status + ". byRefFlight.status = " + byRefFlight.status);
// //flight.status = Landing. byRefFlight.status = Landing
// console.log(flight);

// byCopyFlight.status = "Crash!";
// console.log('flight.status = ' + flight.status + ". byCopyFlight.status = " + byCopyFlight.status);
// //flight.status = Landing. byCopyFlight.status = Crash!


function Robot(type) {   //-->Constructor function
    this.type = type;
}

var flyRobot = new Robot('fly');
var diveRobot = new Robot('dive');
console.log(flyRobot);

Robot.prototype.speak = function (text) {
    console.log(this.type + "Robot says '" + text + "'");
};

flyRobot.speak('Hello World'); //sử dụng lại function speak định nghĩa ở Robot.prototype
diveRobot.speak('I swimming');


flyRobot.talk = function() {
    console.log('I am talking');
};
flyRobot.talk();
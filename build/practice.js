"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = "Pocok";
var age = 1;
// const container: string[] = ["sss", "aaa"];
var container = ["sss", "aaa"];
console.log(name + " has " + age + " age(s) of experience in " + container[0] + " & " + container[0] + ".");
// union
var mixedArray = [1, 2, "three"];
// const mixedArray: Array<number | string> = [1, 2, "three"];
mixedArray.map(function (item, index) { return console.log("Index: " + index + " is " + item); });
var something = "hey-ho";
var isGreet = true;
var greet = function (word, condition) { return console.log(condition ? word : "Bye"); };
greet(something, isGreet);
// Tuple
// array methods work
var data = [1, "Dave"];
console.log("A tuple:", data);
// Enums allow us to declare a set of named constants
// i.e. a collection of related values that can be numeric or string values.
// can be heterogeneous
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status[Status["Deactivate"] = 1] = "Deactivate";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
;
console.log("Hetero enum:", Status);
// Type assertion
var code = 123;
var employeeCode = code;
console.log(typeof (employeeCode)); //Output: number
// or
// this syntax works in React too...
var otherCode = code;
console.log(typeof (otherCode)); //Output: number

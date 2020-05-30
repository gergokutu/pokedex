// To resolve > Cannot redeclare block-scoped variable 'name'
export {};
const name: string = "Pocok";
const age: number = 1;
// const container: string[] = ["sss", "aaa"];
const container: Array<string> = ["sss", "aaa"];
console.log(`${name} has ${age} age(s) of experience in ${container[0]} & ${container[0]}.`)

// union
const mixedArray: (number | string)[] = [1, 2, "three"];
// const mixedArray: Array<number | string> = [1, 2, "three"];
mixedArray.map((item, index) => console.log(`Index: ${index} is ${item}`));

const something: any = "hey-ho";
const isGreet: boolean = true;
const greet = (word: string, condition: boolean): void => console.log(condition ? word : "Bye");
greet(something, isGreet);

// Tuple
// array methods work
const data: [number, string] = [1, "Dave"];
console.log("A tuple:", data);

// Enums allow us to declare a set of named constants
// i.e. a collection of related values that can be numeric or string values.
// can be heterogeneous
enum Status { 
  Active = 'ACTIVE', 
  Deactivate = 1, 
  Pending
};
console.log("Hetero enum:", Status);

// Type assertion
let code: any = 123; 
let employeeCode = <number> code; 
console.log(typeof(employeeCode)); //Output: number
// or
// this syntax works in React too...
let otherCode = code as number;
console.log(typeof(otherCode)); //Output: number

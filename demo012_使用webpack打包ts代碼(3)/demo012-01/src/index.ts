import { hi } from "./m1";

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(123, 456));
console.log(hi);

let obj = { name: "Tom", age: 20 };
obj.age = 18;
console.log(obj);

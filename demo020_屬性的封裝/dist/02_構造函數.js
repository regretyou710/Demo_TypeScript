"use strict";
class Dog {
    constructor(name, age) {
        // 在實例方法中，this就表示當前的實例
        // 在構造函數中當前對象就是當前新建的那個對象
        // 可以透過this向新建的對象中添加屬性
        // console.log(this);
        this.name = name;
        this.age = age;
    }
    bark() {
        // 在方法中可以透過this來表示當前調用方法的對象
        console.log(this.name);
    }
}
const dog1 = new Dog("小黑", 3);
const dog2 = new Dog("小白", 1);
console.log(dog1);
console.log(dog2);
dog1.bark();
dog2.bark();

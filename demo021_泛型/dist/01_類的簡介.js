"use strict";
class Person {
    constructor() {
        // 定義實例屬性
        this.name = "伊森";
        // readonly開頭的屬性表示一個只讀的屬性無法修改
        this.age = 18;
    }
    // 定義方法
    speak() {
        console.log("speak");
    }
    static breathe() {
        console.log("breathe");
    }
}
// 在屬性前使用static關鍵字可以定義類屬性(靜態屬性)
Person.gender = true;
const per = new Person();
console.log(per);
console.log(per.name);
console.log(Person.gender);
// per.age = 20;
per.speak();
Person.breathe();

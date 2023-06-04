"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        speak() {
            console.log("動物叫");
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        speak() {
            super.speak();
            console.log("汪汪叫");
        }
    }
    const dog = new Dog("小狗", 3);
    console.log(dog);
    dog.speak();
})();

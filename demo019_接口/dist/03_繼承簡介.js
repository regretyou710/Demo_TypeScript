"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        speak() {
            console.log("動物叫");
        }
    }
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑`);
        }
        speak() {
            console.log("汪汪叫");
        }
    }
    class Cat extends Animal {
        speak() {
            console.log("喵喵叫");
        }
    }
    const dog = new Dog("小狗", 3);
    console.log(dog);
    dog.run();
    dog.speak();
    const cat = new Cat("小貓", 1);
    console.log(cat);
    cat.speak();
})();

(function () {
  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    speak() {
      console.log("動物叫");
    }
  }

  class Dog extends Animal {
    age: number;

    constructor(name: string, age: number) {
      super(name);
      this.age = age;
    }

    speak() {
      // super.speak();
      console.log("汪汪叫");
    }
  }

  const dog = new Dog("小狗", 3);
  console.log(dog);
  dog.speak();
})();

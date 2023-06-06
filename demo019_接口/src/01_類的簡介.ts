class Person {
  // 定義實例屬性
  name: string = "伊森";

  // readonly開頭的屬性表示一個只讀的屬性無法修改
  readonly age: number = 18;

  // 在屬性前使用static關鍵字可以定義類屬性(靜態屬性)
  static gender: boolean = true;

  // 定義方法
  speak() {
    console.log("speak");
  }

  static breathe() {
    console.log("breathe");
  }
}

const per = new Person();
console.log(per);
console.log(per.name);
console.log(Person.gender);

// per.age = 20;

per.speak();
Person.breathe();

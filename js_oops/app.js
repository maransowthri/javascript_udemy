/* ES6 class */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hello ${this.name}`;
  }

  static className() {
    return "Class Name is Person";
  }
}

class Student extends Person {
  constructor(name, age, std) {
    super(name, age);
    this.std = std;
  }

  getStandard() {
    return `This guy is studying ${this.std}`;
  }
}

person1 = new Person("kmaran", 21);
console.log(person1);
console.log(person1.greeting());
console.log(Person.className());

student1 = new Student("kmaran", 24, "IX");
console.log(student1);
console.log(student1.greeting());
console.log(student1.getStandard());

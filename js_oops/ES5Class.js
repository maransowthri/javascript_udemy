/* ES5 objects & constructor */
// function Person(name, dob) {
//   this.name = name;
//   this.dob = new Date(dob);
//   this.getAge = function () {
//     curDate = new Date();
//     return curDate.getFullYear() - this.dob.getFullYear();
//   };
// }

// maran = new Person("kmaran", "10-18-1996");
// console.log(maran);
// console.log(maran.getAge());

/* ES5 prototypes */

// function Person(name, dob) {
//   this.name = name;
//   this.dob = new Date(dob);
// }

// Person.prototype.getAge = function () {
//   curDate = new Date();
//   return curDate.getFullYear() - this.dob.getFullYear();
// };

// Person.prototype.changeName = function (newName) {
//   this.name = newName;
// };

// maran = new Person("kmaran", "10-18-1996");
// console.log(maran);
// console.log(maran.getAge());
// maran.changeName("karan");
// console.log(maran.name);
// console.log(maran.hasOwnProperty("name"));
// console.log(maran.hasOwnProperty("changeName"));

/* ES5 prototypal inheritance */

// function Person(name, dob) {
//   this.name = name;
//   this.dob = new Date(dob);
// }

// Person.prototype.getAge = function () {
//   curDate = new Date();
//   return curDate.getFullYear() - this.dob.getFullYear();
// };

// function Student(name, dob, std) {
//   Person.call(this, name, dob);
//   this.std = std;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// const student1 = new Student("kmaran", "12/04/2020", "IX");

// console.log(student1);
// console.log(student1.getAge());

/* Object create prototypes */

// const protoTyeps = {
//   greeting: function () {
//     return `Hello ${this.name}!`;
//   },
// };

// person1 = Object.create(protoTyeps);
// person1.name = "kmaran";
// console.log(person1.greeting());

// person1 = Object.create(protoTyeps, { name: { value: "kmaran" } });
// console.log(person1.greeting());

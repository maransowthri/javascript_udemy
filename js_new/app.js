/** Iterators */
function getIterator(names) {
  let index = 0;

  return {
    next: function () {
      return index < names.length
        ? { name: names[index++], done: false }
        : { done: true };
    },
  };
}

const names = ["Karan", "Kalees", "Maran", "Mahesh"];
const namesIterator = getIterator(names);
console.log(namesIterator.next().name);
console.log(namesIterator.next().name);
console.log(namesIterator.next().name);
console.log(namesIterator.next().name);
console.log(namesIterator.next().done);

/** Generators */
function* getNames() {
  yield "Karan";
  yield "Kalees";
  yield "Maran";
  yield "Mahesh";
}

const gen = getNames();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

/** Create IDs with Generators */
function* generateID() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const idGen = generateID();
console.log(idGen.next().value);
console.log(idGen.next().value);
console.log(idGen.next().value);
console.log(idGen.next().value);
console.log(idGen.next().value);
console.log(idGen.next().value);
console.log(idGen.next().value);
console.log(idGen.next().value);

const sym = Symbol();
const sym1 = Symbol("sym1");
console.log(sym, sym1);

const data = {};
data[sym] = "prop1";
data[sym1] = "prop2";
data.sym3 = "prop3";
data.sym4 = "prop4";

/** Symbols will be iignored when you convert it into JSON */
console.log(JSON.stringify(data));

/** Symbols will be ignored when you iterate it */
for (let val in data) {
  console.log(val);
}

/** Destructuring */
let a, b;
[a, b] = [100, 200];
console.log(a, b);

const [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a);
console.log(b);
console.log(c);

({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400 });
console.log(a);
console.log(b);
console.log(rest);

/** Spread operator will copy all elements and will create new array */
let a = [1, 2, 3];
let b = [...a];
b[2] = 5;
console.log(a);
console.log(b);

let person1, person2, person3;
[person1, person2, person3] = getPeople();
function getPeople() {
  const people = ["karan", "kalees", "maran", "mahesh"];
  return people;
}
console.log(person1, person2, person3);

const obj = { name: "Karan", age: 20 };
const { name, age } = obj;
console.log(name, age);

/** Maps */
const map = new Map();

const key1 = "some key1";
const key2 = "some key2";
map.set(key1, "Value of key1");
map.set(key2, "Value of key2");
console.log(map.get(key1));
console.log(map.keys());
console.log(map.values());

for (let [key, value] of map) {
  console.log(key, value);
}

const myArr = Array.from(map);
const myArr = Array.from(map.keys());
const myArr = Array.from(map.values());
console.log(myArr);

/** Sets */
const set = new Set();
set.add(100);
set.add(200);
set.add(300);
set.add(100);
set.add({ name: "kmaran" });
const set = new Set([1, 2, 3, 4, 1]);
const set = new Set(["kmaran", "kmaran"]);
console.log(set);
console.log(Array.from(set));
console.log(set.size);

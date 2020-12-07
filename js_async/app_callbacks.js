// const people = [
//   { name: "kkaran", age: 27 },
//   { name: "rkalees", age: 24 },
//   { name: "kmaran", age: 23 },
//   { name: "rmahesh", age: 21 },
// ];

// function createPerson(person) {
//   setTimeout(() => {
//     people.push(person);
//   }, 3000);
// }

// function getPeople() {
//   setTimeout(() => {
//     let itemsHTML = "";
//     for (let person of people) {
//       itemsHTML += `<li>${person.name}</li>`;
//     }
//     document.body.innerHTML = itemsHTML;
//   }, 1000);
// }

// createPerson({ name: "kavinath", age: 27 });
// getPeople();

// const people = [
//   { name: "kkaran", age: 27 },
//   { name: "rkalees", age: 24 },
//   { name: "kmaran", age: 23 },
//   { name: "rmahesh", age: 21 },
// ];

// function createPerson(person, callback) {
//   setTimeout(() => {
//     people.push(person);
//     callback();
//   }, 3000);
// }

// function getPeople() {
//   setTimeout(() => {
//     let itemsHTML = "";
//     for (let person of people) {
//       itemsHTML += `<li>${person.name}</li>`;
//     }
//     document.body.innerHTML = itemsHTML;
//   }, 1000);
// }

// createPerson({ name: "kavinath", age: 27 }, getPeople);

const people = [
  { name: "kkaran", age: 27 },
  { name: "rkalees", age: 24 },
  { name: "kmaran", age: 23 },
  { name: "rmahesh", age: 21 },
];

function createPerson(person) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      people.push(person);
      if (people.length == 3) {
        resolve();
      } else {
        reject("Something went wrong!");
      }
    }, 3000);
  });
}

function getPeople() {
  setTimeout(() => {
    let itemsHTML = "";
    for (let person of people) {
      itemsHTML += `<li>${person.name}</li>`;
    }
    document.body.innerHTML = itemsHTML;
  }, 1000);
}

createPerson({ name: "kavinath", age: 27 })
  .then(getPeople)
  .catch((error) => {
    console.log(error);
  });

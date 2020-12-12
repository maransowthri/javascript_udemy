export const person = {
  name: "Mahesh",
  age: 21,
};

export function greeting() {
  return `Hi ${person.name}, how are you doing?`;
}

function init() {
  console.log("Hello World!");
}

export default init;

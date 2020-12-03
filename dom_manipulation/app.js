// localStorage.setItem("name", "John");
// sessionStorage.setItem("name", "Kennedy");
// localStorage.removeItem("name");
// const name = localStorage.getItem("name");
// console.log(name);
// sessionStorage.clear();
// localStorage.clear();

const form = document.querySelector("form");
const taskInput = document.querySelector("input#task");

form.addEventListener("submit", (e) => {
  let taskVal = taskInput.value;

  let tasks;
  let existingTasks = localStorage.getItem("tasks");

  if (existingTasks === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(existingTasks);
  }

  tasks.push(taskVal);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";
  e.preventDefault();
});

const addedTasks = JSON.parse(localStorage.getItem("tasks"));

for (let task of addedTasks) {
  console.log(task);
}

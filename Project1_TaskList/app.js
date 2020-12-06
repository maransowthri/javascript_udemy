const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");

loadAllEventListeners();

function loadAllEventListeners() {
  document.addEventListener("DOMContentLoaded", getAllTasks);
  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", removeTask);
  clearBtn.addEventListener("click", clearTasks);
  filter.addEventListener("keyup", filterTasks);
}

function getAllTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));

  if (tasks) {
    for (let task of tasks) {
      const listItem = document.createElement("li");
      listItem.className = "collection-item";
      listItem.appendChild(document.createTextNode(task));
      const deleteLink = document.createElement("a");
      deleteLink.className = "delete-item secondary-content";
      deleteLink.innerHTML = "<i class='fa fa-remove'></i>";
      listItem.appendChild(deleteLink);
      taskList.appendChild(listItem);
    }
  }
}

function addTask(e) {
  let taskName = taskInput.value;

  if (taskName === "") {
    alert("Add a task before submitting...");
    return;
  }
  const listItem = document.createElement("li");
  listItem.className = "collection-item";
  listItem.appendChild(document.createTextNode(taskName));
  const deleteLink = document.createElement("a");
  deleteLink.className = "delete-item secondary-content";
  deleteLink.innerHTML = "<i class='fa fa-remove'></i>";
  listItem.appendChild(deleteLink);
  taskList.appendChild(listItem);
  addTaskToLocalStorage(taskName);
  taskInput.value = "";
  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure that you want to delete this task?")) {
      e.target.parentElement.parentElement.remove();
      clearTaskInLocalStorage(e.target.parentElement.parentElement.textContent);
    }
  }
}

function clearTasks() {
  if (confirm("Are you sure that you want to clear all tasks?")) {
    while (taskList.firstChild) {
      taskList.firstChild.remove();
    }
    clearAllTasksInLocalStorage();
  }
}

function filterTasks(e) {
  let searchText = e.target.value.toLowerCase();

  let listItems = document.querySelectorAll("li.collection-item");

  for (let item of listItems) {
    if (item.textContent.toLowerCase().includes(searchText)) {
      item.style.display = "block";
    } else {
      item.style.display = "None";
    }
  }
}

function addTaskToLocalStorage(task) {
  let tasks;

  if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  } else {
    tasks = [];
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearTaskInLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    tasks.splice(tasks.indexOf(task), 1);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearAllTasksInLocalStorage() {
  localStorage.clear();
}

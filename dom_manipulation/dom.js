let val;

val = document;
val = document.domain;
val = document.URL;
val = document.contentType;

val = document.forms;
val = document.forms[0];

val = document.links;
val = document.links[0].href;
val = document.links[0].className;
val = document.links[0].classList;

val = [1, 2, 3];
console.log(typeof val);

scripts = document.scripts;
console.log(typeof scripts);

val.forEach((script) => {
  console.log(script.getAttribute("src"));
});

for (script of scripts) {
  console.log(script.getAttribute("src"));
}

console.log(val);

let links = document.links;
console.log(links[1]);

const myLink = document.querySelectorAll("a[class*='sample'");
console.log(myLink[0]);

const myLink = document.querySelector("a");
document.querySelector("li").style.color = "red";
document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "red";
console.log(myLink);

const myLink = document.querySelectorAll("li:nth-child(even)");
const myLink = document.querySelectorAll(
  "li.collection-item:nth-child(even) a"
);
const items = document.querySelectorAll("li");
document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "red";

for (item of items) {
  let innerLink = item.querySelector("a");
  item.textContent = "Hello";
  item.appendChild(innerLink);
}

console.log(items);

let list = document.querySelector("ul");

val = list.children;
val = list.children[0].children;
val = list.firstChild.nodeName;
val = list.firstChild.nodeType;
val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;
val = list.childElementCount;

console.log(val);

const item = document.querySelector("li");
val = item.parentElement;
val = item.parentElement.parentElement;

val = item.nextElementSibling;
val = item.nextElementSibling.previousElementSibling;

console.log(val);
const taskList = document.querySelector("ul");
const newListItem = document.createElement("li");
newListItem.className = "collection-item";
newListItem.appendChild(document.createTextNode("New List Item"));

const newListDelete = document.createElement("a");
newListDelete.href = "#";
newListDelete.className = "delete-item secondary-content";

const newListDeleteFont = document.createElement("i");
newListDeleteFont.className = "fa fa-remove";
newListDelete.appendChild(newListDeleteFont);
newListItem.appendChild(newListDelete);
taskList.appendChild(newListItem);

const newTitleElement = document.createElement("h2");
newTitleElement.id = "task-title";
newTitleElement.appendChild(document.createTextNode("New Title"));
console.log(newTitleElement);

const oldTitleElement = document.querySelector("#task-title");
console.log(oldTitleElement);
const parentElement = document.querySelector("div.card-action");
console.log(parentElement);

parentElement.replaceChild(newTitleElement, oldTitleElement);

const parentList = document.querySelector("ul");
const childList = document.querySelector("li");

parentList.removeChild(childList);

const childItem = document.querySelector("li a");
console.log(childItem.classList.remove("delete-item"));

const clearTasks = document.querySelector(".clear-tasks");
const collection = document.querySelector(".collection");
clearTasks.addEventListener("click", (e) => {
  e.preventDefault();
  collection.innerHTML = "";
  e.target.setAttribute("disabled", "true");
  console.log(e.target);
});

const body = document.querySelector("body");
const card = document.querySelector(".card");
const clear = document.querySelector(".clear-tasks");
const head = document.querySelector(".card-title");

clear.addEventListener("click", (e) => {
  console.log(`EVENT TYPE: ${e.type}`);
});
clear.addEventListener("dblclick", (e) => {
  console.log(`EVENT TYPE: ${e.type}`);
});
card.addEventListener("mouseenter", (e) => {
  console.log(`EVENT TYPE: ${e.type}`);
});
card.addEventListener("mouseleave", (e) => {
  console.log(`EVENT TYPE: ${e.type}`);
});
card.addEventListener("mouseover", (e) => {
  console.log(`EVENT TYPE: ${e.type}`);
});
card.addEventListener("mouseout", (e) => {
  console.log(`EVENT TYPE: ${e.type}`);
});

card.addEventListener("mouseover", (e) => {
  head.textContent = `X: ${e.clientX}`;
  body.style.backgroundColor = `rgb(${e.clientX},${e.clientY},40)`;
});

const form = document.querySelector("form");
const taskInput = document.getElementById("task");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = taskInput.value;
  taskInput.value = "";
  console.log(`Input: ${inputVal}`);
  console.log(`EVENT TYPE: ${e.type}`);
});

// EVENT BUBLING
document.querySelector(".card-title").addEventListener("click", () => {
  console.log("Card Title");
});
document.querySelector(".card-content").addEventListener("click", () => {
  console.log("Card Content");
});
document.querySelector(".card").addEventListener("click", () => {
  console.log("Card");
});

// EVENT DELEGATION
const deleteItem = document.querySelector(".delete-item");
deleteItem.addEventListener("click", () => {
  console.log("Clicked on delete");
});

document.body.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
});

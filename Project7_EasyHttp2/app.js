const http = new EasyHTTP();
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const newPerson = {
  name: "Justin Bieber",
  username: "jbwhatsupman",
  email: "jb@april.biz",
};
http
  .post("https://jsonplaceholder.typicode.com/users", newPerson)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const updatePerson = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "sam@gmail.com",
};

http
  .put("https://jsonplaceholder.typicode.com/users/1", updatePerson)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

http
  .delete("https://jsonplaceholder.typicode.com/users/1")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

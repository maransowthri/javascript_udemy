import fetch from "node-fetch";

const getUsers = async () => {
  console.log("Loading");
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonResponse = await response.json();
  return jsonResponse;
};

getUsers().then((res) => console.log(res));

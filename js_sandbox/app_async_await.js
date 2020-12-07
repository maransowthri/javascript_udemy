async function sayHi() {
  //   throw new Error("Something went wrong!");
  //   return "Hi";
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved!"), 1000);
  });
  console.log("Let me start");
  const res = await promise;
  return res;
}

const promise = sayHi()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

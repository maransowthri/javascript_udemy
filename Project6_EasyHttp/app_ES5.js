const http = new EasyHTTP();

http.get("https://jsonplaceholder.typicode.com/posts", (error, response) => {
  if (error) {
    console.log(`ERROR: ${error}`);
  } else {
    console.log(response);
  }
});

http.get("https://jsonplaceholder.typicode.com/posts/5", (error, response) => {
  if (error) {
    console.log(`ERROR: ${error}`);
  } else {
    console.log(response);
  }
});

const post_data = {
  title: "The sun goes down",
  body: "And stars come up",
};
http.post(
  "https://jsonplaceholder.typicode.com/posts/",
  post_data,
  (error, response) => {
    if (error) {
      console.log(`ERROR: ${error}`);
    } else {
      console.log(response);
    }
  }
);

const put_data = {
  title: "What If I trip & Fall",
  body: "Just lemme know",
};

http.put(
  "https://jsonplaceholder.typicode.com/posts/5",
  put_data,
  (error, response) => {
    if (error) {
      console.log(error);
    } else {
      console.log(response);
    }
  }
);

http.delete(
  "https://jsonplaceholder.typicode.com/posts/5",
  (error, response) => {
    if (error) {
      console.log(error);
    } else {
      console.log(response);
    }
  }
);

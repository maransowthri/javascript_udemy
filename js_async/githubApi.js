import fetch from "node-fetch";

const getStarsCount = async (username, repo) => {
  const res = await fetch(`https://api.github.com/repos/${username}/${repo}`);
  const jsonRes = await res.json();

  return jsonRes["stargazers_count"];
};

const getQuestionsCount = async (tag) => {
  const res = await fetch(
    `https://api.stackexchange.com/2.3/tags/${tag}/info?order=desc&sort=popular&site=stackoverflow`
  );
  const jsonRes = await res.json();

  return jsonRes["items"][0]["count"];
};

getStarsCount("angular", "angular")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

getQuestionsCount("javascript")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

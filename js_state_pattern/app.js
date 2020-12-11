class PageState {
  constructor() {
    this.curentState = new HomeState();
  }
  change(state) {
    this.curentState = state;
  }
}

class HomeState {
  constructor() {
    document.getElementById("heading").innerHTML = "<h1>Home Page</h1>";
    document.getElementById("content").innerHTML =
      "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam natus perferendis assumenda cum doloribus sapiente? Similique atque, molestias odio quam facilis tenetur vel assumenda eos eveniet temporibus in quia nesciunt?</p>";
  }
}

class AboutState {
  constructor() {
    document.getElementById("heading").innerHTML = "<h1>About Page</h1>";
    document.getElementById("content").innerHTML =
      "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam natus perferendis assumenda cum doloribus sapiente? Similique atque, molestias odio quam facilis tenetur vel assumenda eos eveniet temporibus in quia nesciunt?</p>";
  }
}

const page = new PageState();

document.getElementById("home").addEventListener("click", (e) => {
  page.change(new HomeState());
  e.preventDefault();
});

document.getElementById("about").addEventListener("click", (e) => {
  page.change(new AboutState());
  e.preventDefault();
});

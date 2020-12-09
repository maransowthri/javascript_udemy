const ui = new UI();
const store = new Store();

document.addEventListener("DOMContentLoaded", getWeather);

document.getElementById("w-change-btn").addEventListener("click", () => {
  store.setCity(document.getElementById("city").value);
  getWeather();
  $(function () {
    $("#locmodal").modal("hide");
  });
});

function getWeather() {
  const w_obj = new Weather(store.getCity(), "someState");
  w_obj
    .get()
    .then((data) => ui.paint(data))
    .catch((err) => console.log(err));
}

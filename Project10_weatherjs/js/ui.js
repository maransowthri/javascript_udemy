class UI {
  constructor() {
    this.locationEl = document.getElementById("w-location");
    this.descEl = document.getElementById("w-desc");
    this.stringEl = document.getElementById("w-string");
    this.iconEl = document.getElementById("w-icon");
    this.detailsEl = document.getElementById("w-details");
    this.humidityEl = document.getElementById("w-humidity");
    this.dewpointEl = document.getElementById("w-dewpoint");
    this.feelslikeEl = document.getElementById("w-feels-like");
    this.windEl = document.getElementById("w-wind");
  }

  paint(data) {
    this.locationEl.textContent = data.list[0].name;
    this.descEl.textContent = data.list[0].weather[0].description;
    this.stringEl.textContent = data.list[0].weather[0].main;
    // this.iconEl.setAttribute("src", data.list[0].weather[0].icon);
    // this.detailsEl.textContent = data.list[0].weather[0].description;
    this.humidityEl.textContent = `Humidity: ${data.list[0].main.humidity}`;
    this.dewpointEl.textContent = `Dew point: ${data.list[0].main.pressure}`;
    this.feelslikeEl.textContent = `Feels like: ${data.list[0].main.feels_like}`;
    this.windEl.textContent = `Wind: ${data.list[0].main.temp_min}`;
  }
}

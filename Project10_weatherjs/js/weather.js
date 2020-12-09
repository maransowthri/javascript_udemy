class Weather {
  constructor(city, state) {
    this.city = city;
    this.state = state;
    this.query = {
      q: this.city,
      cnt: "4",
      mode: "null",
      lon: "0",
      type: "link, accurate",
      lat: "0",
      units: "imperial, metric",
    };
    this.url =
      "https://community-open-weather-map.p.rapidapi.com/find?" +
      new URLSearchParams(this.query);
    this.headers = {
      "x-rapidapi-key": "8acefed265mshb3f21bb8660878dp183b85jsn40e35579d0ca",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      useQueryString: true,
    };
  }

  async get() {
    const res = await fetch(this.url, {
      method: "GET",
      headers: this.headers,
    });
    const resData = await res.json();
    return resData;
  }

  changeLocation(city) {
    this.city = city;
  }
}

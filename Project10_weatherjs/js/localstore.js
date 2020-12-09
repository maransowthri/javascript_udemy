class Store {
  constructor() {
    const city = localStorage.getItem("city");
    city ? (this.city = city) : (this.city = "london");
  }

  getCity() {
    return this.city;
  }

  setCity(newCity) {
    localStorage.setItem("city", newCity);
    this.city = newCity;
  }
}

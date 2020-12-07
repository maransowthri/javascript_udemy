function EasyHTTP() {
  this.http = new XMLHttpRequest();
}

EasyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);
  this.http.onload = function () {
    if (this.status === 200) {
      callback(null, this.response);
    } else {
      callback(this.status, null);
    }
  };
  this.http.send();
};

EasyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-Type", "application/json");
  this.http.onload = function () {
    if (this.status == 201) {
      callback(null, this.response);
    } else {
      callback(`ERROR: ${this.status}`, null);
    }
  };
  this.http.send(JSON.stringify(data));
};

EasyHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-Type", "application/json");
  this.http.onload = function () {
    if (this.status == 200) {
      callback(null, this.response);
    } else {
      callback(`ERROR: ${this.status}`, null);
    }
  };
  this.http.send(JSON.stringify(data));
};

EasyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);
  this.http.onload = function () {
    if (this.status == 200) {
      callback(null, "POST DELETED!");
    } else {
      callback(this.status, null);
    }
  };
  this.http.send();
};

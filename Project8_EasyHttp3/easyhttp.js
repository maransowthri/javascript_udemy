class EasyHTTP {
  async get(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  async post(url, data) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });

    const resData = await res.json();
    return resData;
  }

  async put(url, data) {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
    const resData = await res.json();
    return resData;
  }

  async delete(url) {
    const res = await fetch(url);
    const data = await res.json();
    return "USER DELETED";
  }
}

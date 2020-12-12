const StoreCtrl = (function () {
  return {
    addItem: function (item) {
      let items = localStorage.getItem("items");
      if (!items) {
        items = [];
      } else {
        items = JSON.parse(items);
      }
      items.push(item);
      localStorage.setItem("items", JSON.stringify(items));
    },
    getItems: function () {
      let items = localStorage.getItem("items");
      if (!items) {
        items = [];
      } else {
        items = JSON.parse(items);
      }
      return items;
    },
    updateItem: function (updatedItem) {
      let items = JSON.parse(localStorage.getItem("items"));
      for (let item of items) {
        if (item.id === updatedItem.id) {
          items.splice(item.id, 1, updatedItem);
          break;
        }
      }
      localStorage.setItem("items", JSON.stringify(items));
    },
    removeItem: function (id) {
      let items = JSON.parse(localStorage.getItem("items"));
      items.splice(id, 1);
      localStorage.setItem("items", JSON.stringify(items));
    },
    removeAllItems: function () {
      let items = [];
      localStorage.setItem("items", JSON.stringify(items));
    },
  };
})();

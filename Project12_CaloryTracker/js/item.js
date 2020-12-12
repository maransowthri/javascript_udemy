const ItemCtrl = (function () {
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  const data = {
    items: StoreCtrl.getItems(),
    totalCalories: 0,
    currentItem: null,
  };

  return {
    getItems: function () {
      return data.items;
    },
    logData: function () {
      return data;
    },
    addItem(name, calories) {
      let newID = 0;
      if (data.items.length > 0) {
        newID = data.items[data.items.length - 1].id + 1;
      }
      const newItem = new Item(newID, name, parseInt(calories));
      data.items.push(newItem);
      return newItem;
    },
    getTotalCalories: function () {
      let total = 0;
      for (let item of data.items) {
        total += item.calories;
      }
      return total;
    },
    getItemById: function (id) {
      return data.items.filter((item) => item.id === id)[0];
    },
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    updateItem: function (itemNew) {
      data.items.map((item) => {
        if (item.id === itemNew.id) {
          item.name = itemNew.name;
          item.calories = parseInt(itemNew.calories);
        }
      });
    },
    removeItem: function (id) {
      data.items = data.items.filter((item) => item.id !== id);
    },
    removeAllItems: function () {
      data.items = [];
    },
  };
})();

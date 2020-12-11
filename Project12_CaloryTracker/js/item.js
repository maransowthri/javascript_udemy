const ItemCtrl = (function () {
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  const data = {
    items: [
      //   { id: 0, name: "Steak Dinner", calories: 1200 },
      //   { id: 1, name: "Breakfast", calories: 500 },
      //   { id: 2, name: "Brunch", calories: 900 },
    ],
    currentData: null,
    totalCalories: 0,
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
  };
})();

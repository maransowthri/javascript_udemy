const App = (function (ItemCtrl, UICtrl) {
  const loadEventListeners = function () {
    const UISelectors = UICtrl.getUISelectors();

    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);
  };

  const itemAddSubmit = function (e) {
    const { name, calories } = UICtrl.getItemInput();
    if (name && calories) {
      const newItem = ItemCtrl.addItem(name, calories);
      UICtrl.addListItem(newItem);
    }
    const totalCalories = ItemCtrl.getTotalCalories();
    UICtrl.updateTotalCalories(totalCalories);
    UICtrl.clearInputFields();
    e.preventDefault();
  };

  return {
    init: function () {
      const items = ItemCtrl.getItems();
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        UICtrl.populateItemList(items);
      }
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.updateTotalCalories(totalCalories);
      loadEventListeners();
    },
  };
})(ItemCtrl, UICtrl);

App.init();

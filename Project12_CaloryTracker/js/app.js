const App = (function (ItemCtrl, StoreCtrl, UICtrl) {
  const loadEventListeners = function () {
    const UISelectors = UICtrl.getUISelectors();

    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);
    document
      .querySelector(UISelectors.itemList)
      .addEventListener("click", itemUpdatePopulate);
    document
      .querySelector(UISelectors.updateBtn)
      .addEventListener("click", itemUpdateSubmit);
    document
      .querySelector(UISelectors.deleteBtn)
      .addEventListener("click", removeItem);
    document.addEventListener("keypress", (e) => {
      if (e.keycode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });
    document
      .querySelector(UISelectors.clearBtn)
      .addEventListener("click", clearAllItem);
    document
      .querySelector(UISelectors.backBtn)
      .addEventListener("click", UICtrl.clearEditState);
  };

  const itemAddSubmit = function (e) {
    let newItem = null;
    const { name, calories } = UICtrl.getItemInput();
    if (name && calories) {
      newItem = ItemCtrl.addItem(name, calories);
      UICtrl.addListItem(newItem);
    }
    const totalCalories = ItemCtrl.getTotalCalories();
    UICtrl.updateTotalCalories(totalCalories);
    StoreCtrl.addItem(newItem);
    UICtrl.clearInputFields();
    e.preventDefault();
  };

  const itemUpdatePopulate = function (e) {
    if (e.target.classList.contains("edit-item")) {
      UICtrl.showEditState();
      const itemIDArr = e.target.parentElement.parentElement.id;
      const itemID = parseInt(itemIDArr.split("-")[1]);
      const item = ItemCtrl.getItemById(itemID);
      ItemCtrl.setCurrentItem(item);
      UICtrl.addDataToUpdateForm(item);
    }
    e.preventDefault();
  };

  const itemUpdateSubmit = function (e) {
    const idToBeUpdated = ItemCtrl.getCurrentItem().id;
    const { name, calories } = UICtrl.getItemInput();
    const item = { id: idToBeUpdated, name, calories };
    ItemCtrl.updateItem(item);
    UICtrl.updateItem(item);
    StoreCtrl.updateItem(item);
    UICtrl.clearEditState();
    let totalCalories = ItemCtrl.getTotalCalories();
    UICtrl.updateTotalCalories(totalCalories);
    e.preventDefault();
  };

  const removeItem = function (e) {
    const idToBeRemoved = ItemCtrl.getCurrentItem().id;
    ItemCtrl.removeItem(idToBeRemoved);
    UICtrl.removeItem(idToBeRemoved);
    StoreCtrl.removeItem(idToBeRemoved);
    UICtrl.clearEditState();
    let totalCalories = ItemCtrl.getTotalCalories();
    UICtrl.updateTotalCalories(totalCalories);
    e.preventDefault();
  };

  const clearAllItem = function (e) {
    ItemCtrl.removeAllItems();
    UICtrl.removeAllItems();
    StoreCtrl.removeAllItems();
    let totalCalories = ItemCtrl.getTotalCalories();
    UICtrl.updateTotalCalories(totalCalories);
    UICtrl.hideList();
    e.preventDefault();
  };

  return {
    init: function () {
      UICtrl.clearEditState();
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
})(ItemCtrl, StoreCtrl, UICtrl);

App.init();

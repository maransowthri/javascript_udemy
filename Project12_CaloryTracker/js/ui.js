const UICtrl = (function () {
  const UISelectors = {
    itemList: "#item-list",
    itemListAll: "#item-list li",
    addBtn: ".add-btn",
    updateBtn: ".update-btn",
    deleteBtn: ".delete-btn",
    backBtn: ".back-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
    totalCaloriesEl: ".total-calories",
    clearBtn: ".clear-btn",
  };
  return {
    populateItemList: function (items) {
      let html = "";
      for (let item of items) {
        html += `
          <li class="collection-item" id="item-${item.id}">
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil-alt"></i>
            </a>
          </li>`;
      }
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getUISelectors: function () {
      return UISelectors;
    },
    getItemInput: function () {
      const name = document.querySelector(UISelectors.itemNameInput).value;
      const calories = document.querySelector(UISelectors.itemCaloriesInput)
        .value;
      return {
        name,
        calories,
      };
    },
    addListItem: function (item) {
      document.querySelector(UISelectors.itemList).style.display = "block";
      let liEl = document.createElement("li");
      liEl.className = "collection-item";
      liEl.id = `item-${item.id}`;
      liEl.innerHTML = `
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil-alt"></i>
            </a>
      `;
      document.querySelector(UISelectors.itemList).appendChild(liEl);
    },
    clearInputFields: function () {
      document.querySelector(UISelectors.itemNameInput).value = "";
      document.querySelector(UISelectors.itemCaloriesInput).value = "";
    },
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = "none";
    },
    updateTotalCalories: function (totalCalories) {
      document.querySelector(
        UISelectors.totalCaloriesEl
      ).textContent = totalCalories;
    },
    clearEditState: function () {
      document.querySelector(UISelectors.addBtn).style.display = "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "none";
      document.querySelector(UISelectors.updateBtn).style.display = "none";
      document.querySelector(UISelectors.backBtn).style.display = "none";
      UICtrl.clearInputFields();
    },
    showEditState: function () {
      document.querySelector(UISelectors.addBtn).style.display = "none";
      document.querySelector(UISelectors.deleteBtn).style.display = "inline";
      document.querySelector(UISelectors.updateBtn).style.display = "inline";
      document.querySelector(UISelectors.backBtn).style.display = "inline";
      UICtrl.clearInputFields();
    },
    addDataToUpdateForm: function (item) {
      document.querySelector(UISelectors.itemNameInput).value = item.name;
      document.querySelector(UISelectors.itemCaloriesInput).value =
        item.calories;
    },
    updateItem: function (item) {
      const listItemsAllEl = document.querySelectorAll(UISelectors.itemListAll);
      const listEAllArr = Array.from(listItemsAllEl);
      for (let liItem of listEAllArr) {
        const liItemId = liItem.getAttribute("id");
        if (liItemId === `item-${item.id}`) {
          document.querySelector(`#${liItemId}`).innerHTML = `
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil-alt"></i>
            </a>
          `;
          break;
        }
      }
    },
    removeItem: function (id) {
      document.querySelector(`#item-${id}`).remove();
    },
    removeAllItems: function () {
      const listItemsEl = document.querySelectorAll(UISelectors.itemListAll);
      for (let lisItemEl of listItemsEl) {
        lisItemEl.remove();
      }
    },
  };
})();

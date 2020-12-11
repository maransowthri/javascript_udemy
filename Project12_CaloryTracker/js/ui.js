const UICtrl = (function () {
  const UISelectors = {
    itemList: "#item-list",
    addBtn: ".add-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
    totalCaloriesEl: ".total-calories",
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
  };
})();

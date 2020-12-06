const getCustomerBtn = document.getElementById("get-customer-btn");
const getCustomersBtn = document.getElementById("get-customers-btn");
const outputCustomerEl = document.getElementById("output-customer");
const outputCustomersEl = document.getElementById("output-customers");

getCustomerBtn.addEventListener("click", loadCustomer);
getCustomersBtn.addEventListener("click", loadCustomers);

function loadCustomer() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onprogress = function () {
    outputCustomerEl.innerHTML = "<h1>Loading....</h1>";
  };

  xhr.onerror = function () {
    outputCustomerEl.innerHTML = "<h1>Something went wrong!</h1>";
  };

  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      outputCustomerEl.innerHTML = `<ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Age: ${customer.age}</li>
            <li>Compamy: ${customer.company}</li>
            <li>Mobile: ${customer.mobile}</li>
        </ul>`;
    } else {
      outputCustomerEl.innerHTML = `<p>Error Status Code: ${this.status}</p>`;
    }
  };

  xhr.send();
}
function loadCustomers() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onprogress = function () {
    outputCustomersEl.innerHTML = "<h1>Loading...</h1>";
  };

  xhr.onerror = function () {
    outputCustomersEl.innerHTML = "<h1>Something went wrong!</h1>";
  };

  xhr.onload = function () {
    if (this.status === 200) {
      outputCustomersEl.innerHTML = "";
      const customers = JSON.parse(this.responseText);
      const table = document.createElement("table");
      const rowHeader = document.createElement("thead");
      rowHeader.innerHTML = `<tr>
        <th>ID</th>
        <th>Name</th>
        <th>Company</th>
      </tr>`;

      const tbody = document.createElement("tbody");

      for (customer of customers) {
        let row = document.createElement("tr");
        let tdata = `
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.company}</td>
          `;
        row.innerHTML = tdata;
        tbody.appendChild(row);
      }

      table.appendChild(rowHeader);
      table.appendChild(tbody);
      outputCustomersEl.appendChild(table);
    } else {
      outputCustomersEl.innerHTML = `<h1>Error Status Code: ${this.status}</h1>`;
    }
  };

  xhr.send();
}

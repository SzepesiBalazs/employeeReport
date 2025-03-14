import EmployeeHandler from "./src/EmployeeHandler.js";

const employeeHandler = new EmployeeHandler();

const employees = employeeHandler.getEmployees();
const underaged = employeeHandler.getEmployeesByAge();

groupCharacters();

function groupCharacters() {
  const employeeDisplay = document.getElementById("employee-list");
  let groupedString = "";

  employees.forEach((employee) => {
    groupedString += `<span>${employee.firstname}${" "}${
      employee.lastname
    }${" "}${employee.age}</span><br>`;
  });

  employeeDisplay.innerHTML = groupedString;
}

function selectUnderaged() {
  const employeeDisplay = document.getElementById("employee-list");

  let groupedString = "";
  underaged.forEach((employee) => {
    groupedString += `<span>${employee.firstname}${" "}${
      employee.lastname
    }${" "}${employee.age}</span><br>`;
  });

  employeeDisplay.innerHTML = groupedString;
}

function sortEmployeesAscended() {
  const employeeDisplay = document.getElementById("employee-list");
  employeeHandler.isDescendingEnabled = false;
  employeeHandler.isAscendingEnabled = true;
  employeeHandler.handleSorting();
  employeeHandler.displayEmployees(employeeDisplay);
}

function sortEmployeesDescended() {
  const employeeDisplay = document.getElementById("employee-list");
  employeeHandler.isAscendingEnabled = false;
  employeeHandler.isDescendingEnabled = true;
  employeeHandler.handleSorting();
  employeeHandler.displayEmployees(employeeDisplay);
}

const button1 = document.querySelector("#underaged-button");
button1.addEventListener("click", selectUnderaged);

const button2 = document.querySelector("#ascending-button");
button2.addEventListener("click", sortEmployeesAscended);

const button3 = document.querySelector("#descending-button");
button3.addEventListener("click", sortEmployeesDescended);

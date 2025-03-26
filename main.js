import EmployeeHandler from "./src/EmployeeHandler.js";

const employeeHandler = new EmployeeHandler();

groupCharacters();

function groupCharacters() {
  const employeeDisplay = document.getElementById("employee-list");
  employeeHandler.displayEmployees(employeeDisplay);
}

function selectUnderaged() {
  const employeeDisplay = document.getElementById("employee-list");
  employeeHandler.handleUnderAged();
  employeeHandler.displayEmployees(employeeDisplay);
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

function resetEmployees() {
  const employeeDisplay = document.getElementById("employee-list");
  employeeHandler.reset();
  employeeHandler.displayEmployees(employeeDisplay);
}

const button1 = document.querySelector("#underaged-button");
button1.addEventListener("click", selectUnderaged);

const button2 = document.querySelector("#ascending-button");
button2.addEventListener("click", sortEmployeesAscended);

const button3 = document.querySelector("#descending-button");
button3.addEventListener("click", sortEmployeesDescended);

const button4 = document.querySelector("#reset-button");
button4.addEventListener("click", resetEmployees);

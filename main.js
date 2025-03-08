import EmployeeHandler from "./src/EmployeeHandler.js";

const employeeHandler = new EmployeeHandler();

const employees = employeeHandler.getEmployees();
const underaged = employeeHandler.getEmployeesByAge();

groupCharacters();

function groupCharacters(inputString, elementId) {
  const employeeDisplay = document.getElementById("employee-list");
  let groupedString = "";

  employees.forEach((employee) => {
    groupedString += `<span>${employee.firstname}${" "}${
      employee.lastname
    }${" "}${employee.age}</span><br>`;
  });

  employeeDisplay.innerHTML = groupedString;
}

function onButtonClick() {
  const employeeDisplay = document.getElementById("employee-list");

  if (employeeDisplay.innerHTML) {
    employeeDisplay.innerHTML = "";
  } else {
    let groupedString = "";
    underaged.forEach((employee) => {
      groupedString += `<span>${employee.firstname}${" "}${
        employee.lastname
      }${" "}${employee.age}</span><br>`;
    });

    employeeDisplay.innerHTML = groupedString;
  }
}

const button1 = document.querySelector("button");
button1.addEventListener("click", onButtonClick);

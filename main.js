import EmployeeHandler from "./src/EmployeeHandler";

const employeeHandler = new EmployeeHandler();

const employees = employeeHandler.getEmployees();
console.log(employees);

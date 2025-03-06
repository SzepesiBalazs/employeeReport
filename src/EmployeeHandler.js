import employees from "../employeeData.json" with { type: "json" };
export default class EmployeeHandler {
  constructor() {
    this.employees = employees
  }
  getEmployeesByAge(){
    return this.employees.filter(employee => employee.age < 18)
  }

  getEmployees(){
    return this.employees
  }
}



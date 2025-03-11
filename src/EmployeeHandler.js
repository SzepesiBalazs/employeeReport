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

  getEmployeesAscended(){
    return this.employees.sort((a,b) => a.firstname.localeCompare(b.firstname))
  } 
  
  getEmployeesDescended(){
    return this.employees.sort((a,b) => b.firstname.localeCompare(a.firstname))
  }
}
import employees from "../employeeData.json" with { type: "json" };
export default class EmployeeHandler {
  constructor() {
    this.originalEmployees = employees
    this.employees = employees
  }
 
  getOriginalEmployees(){
    return this.originalEmployees;
  }
 
  getEmployeesByAge(){
   this.employees = this.employees.filter(employee => employee.age < 18)
  }

  getEmployeesAscended(){
    return this.employees.sort((a,b) => a.firstname.localeCompare(b.firstname))
  } 
  
  getEmployeesDescended(){
    return this.employees.sort((a,b) => b.firstname.localeCompare(a.firstname))
  }

  handleSorting(){
    if (this.isAscendingEnabled) {
      this.getEmployeesAscended()
    } if (this.isDescendingEnabled) {
      this.getEmployeesDescended()
    } 
  }

  handleUnderAged(){ 
    console.log(this.employees)
      this.getEmployeesByAge(); 
  }


  reset(){
    this.employees = this.originalEmployees
  }

  

  displayEmployees(employeeDisplay){
    let groupedString = "";
    this.employees.forEach((employee) => {
    groupedString += `<span>${employee.firstname} ${employee.lastname} ${employee.age}</span><br>`;
  });

  employeeDisplay.innerHTML = groupedString;
  }
}


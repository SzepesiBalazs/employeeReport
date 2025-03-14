import EmployeeHandler from "../src/EmployeeHandler";
describe("EmployeeReport", () => {
  test("Should find workers under 18", () => {
    const employeeDataHandler = new EmployeeHandler();
    employeeDataHandler.employees = [
      { firstname: "Ben", lastname: "Wilson", age: 17 },
      { firstname: "Benjamin", lastname: "Wilson", age: 19 },
    ];
    expect(employeeDataHandler.getEmployeesByAge().length).toBe(1);
  });

  test("Should sort workers in ascending order", () => {
    const employeeDataHandler = new EmployeeHandler();
    employeeDataHandler.employees = [
      { firstname: "Ben", lastname: "Wilson", age: 17 },
      { firstname: "Alen", lastname: "Wilson", age: 19 },
      { firstname: "Christian", lastname: "Wilson", age: 19 },
    ];
    expect(employeeDataHandler.getEmployeesAscended().length).toBe(3);
    console.log(employeeDataHandler.getEmployeesAscended())
  }); 
  
  test("Should sort workers in descending order", () => {
    const employeeDataHandler = new EmployeeHandler();
    employeeDataHandler.employees = [
      { firstname: "Harry", lastname: "Wilson", age: 17 },
      { firstname: "Alen", lastname: "Wilson", age: 19 },
      { firstname: "David", lastname: "Wilson", age: 19 },
    ];
    expect(employeeDataHandler.getEmployeesDescended().length).toBe(3);
    //console.log(employeeDataHandler.getEmployeesDescended())
  });
});

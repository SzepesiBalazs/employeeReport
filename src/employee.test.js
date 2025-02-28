import EmployeeHandler from "./EmployeeHandler";
describe("EmployeeReport", () => {
  test("Employee data", () => {
    employeeData = new EmployeeHandler();
    console.log(employees);
    expect(employeeData).toContain(employees);
  });
});

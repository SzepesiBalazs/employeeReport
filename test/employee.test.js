import EmployeeHandler from "../src/EmployeeHandler";
describe("EmployeeReport", () => {
  test("Should find workes under 18", () => {
    const employeeDataHandler = new EmployeeHandler();
    employeeDataHandler.employees = [
      { firstname: "Ben", lastname: "Wilson", age: 17 },
      { firstname: "Benjamin", lastname: "Wilson", age: 19 },
    ];
    expect(employeeDataHandler.getEmployeesByAge().length).toBe(1);
  });
});

const Employee = require("./../lib/Employee");

describe("Employee class", () => {
    it("Creates an employee object", () => {
        const emp = new Employee('Alap Raval', 1234, 'alap.raval@gmail.com');
        expect(typeof (emp)).toBe("object");
    });

    it("Has a property - name", () => {
        const emp = new Employee('Alap Raval', 1234, 'alap.raval@gmail.com');
        expect(emp.name).toBe('Alap Raval');
    });

    it("Has a property - id", () => {
        const emp = new Employee('Alap Raval', 1234, 'alap.raval@gmail.com');
        expect(emp.id).toBe(1234);
    });

    it("Has a property - email", () => {
        const emp = new Employee('Alap Raval', 1234, 'alap.raval@gmail.com');
        expect(emp.email).toBe('alap.raval@gmail.com');
    });

    it("Can access id value via getId()", () => {
        const emp = new Employee('Alap Raval', 1234, 'alap.raval@gmail.com');
        expect(emp.getId()).toBe(1234);
    });

    it("Can access name via getName()", () => {
        const emp = new Employee('Alap Raval', 1234, 'alap.raval@gmail.com');
        expect(emp.getName()).toBe('Alap Raval');
    });

    it("Can access email value via getEmail()", () => {
        const emp = new Employee('Alap Raval', 1234, 'alap.raval@gmail.com');
        expect(emp.getEmail()).toBe('alap.raval@gmail.com');
    });

    it("Can access role value via getRole()", () => {
        const emp = new Employee('Alap Raval', 1234, 'alap.raval@gmail.com');
        expect(emp.getRole()).toBe('Employee');
    });
});
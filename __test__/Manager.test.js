const Manager = require("./../lib/Manager");

describe("Manager class", () => {
    it("Creates an manager object", () => {
        const manager = new Manager('Michael Scott', 2313223, 'michael.scott@dunderscranton.com', '6301235433');
        expect(typeof (manager)).toBe("object");
    });

    it("Has a property - name", () => {
        const manager = new Manager('Michael Scott', 2313223, 'michael.scott@dunderscranton.com', '6301235433');
        expect(manager.name).toBe('Michael Scott');
    });

    it("Has a property - id", () => {
        const manager = new Manager('Michael Scott', 2313223, 'michael.scott@dunderscranton.com', '6301235433');
        expect(manager.id).toBe(2313223);
    });

    it("Has a property - email", () => {
        const manager = new Manager('Michael Scott', 2313223, 'michael.scott@dunderscranton.com', '6301235433');
        expect(manager.email).toBe('michael.scott@dunderscranton.com');
    });

    it("Has a property - officeNumber", () => {
        const manager = new Manager('Michael Scott', 2313223, 'michael.scott@dunderscranton.com', '6301235433');
        expect(manager.officeNumber).toBe('6301235433');
    });

    it("Can access name value via getName()", () => {
        const manager = new Manager('Michael Scott', 2313223, 'michael.scott@dunderscranton.com', '6301235433');
        expect(manager.getName()).toBe('Michael Scott');
    });

    it("Can access id value via getId()", () => {
        const manager = new Manager('Michael Scott', 2313223, 'michael.scott@dunderscranton.com', '6301235433');
        expect(manager.getId()).toBe(2313223);
    });

    it("Can access email value via getEmail()", () => {
        const manager = new Manager('Michael Scott', 2313223, 'michael.scott@dunderscranton.com', '6301235433');
        expect(manager.getEmail()).toBe('michael.scott@dunderscranton.com');
    });

    it("Can access role value via getRole()", () => {
        const manager = new Manager('Michael Scott', 2313223, 'michael.scott@dunderscranton.com', '6301235433');
        expect(manager.getRole()).toBe('Manager');
    });

    it("Can access office number value via getOfficeNumber()", () => {
        const manager = new Manager('Michael Scott', 2313223, 'michael.scott@dunderscranton.com', '6301235433');
        expect(manager.getOfficeNumber()).toBe('6301235433');
    });
});
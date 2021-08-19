const Engineer = require("./../lib/Engineer");

describe("Engineer class", () => {
    it("Creates an engineer object", () => {
        const engineer = new Engineer('Alap Raval', 1234, 'alap.raval@gmail.com', 'alap.raval');
        expect(typeof (engineer)).toBe("object");
    });

    it("Has a property - name", () => {
        const engineer = new Engineer('Alap Raval', 1234, 'alap.raval@gmail.com', 'alap.raval');
        expect(engineer.name).toBe('Alap Raval');
    });

    it("Has a property - id", () => {
        const engineer = new Engineer('Alap Raval', 1234, 'alap.raval@gmail.com', 'alap.raval');
        expect(engineer.id).toBe(1234);
    });

    it("Has a property - email", () => {
        const engineer = new Engineer('Alap Raval', 1234, 'alap.raval@gmail.com', 'alap.raval');
        expect(engineer.email).toBe('alap.raval@gmail.com');
    });

    it("Has a property - github", () => {
        const engineer = new Engineer('Alap Raval', 1234, 'alap.raval@gmail.com', 'alap.raval');
        expect(engineer.github).toBe('alap.raval');
    });

    it("Can access id value via getId()", () => {
        const engineer = new Engineer('Alap Raval', 1234, 'alap.raval@gmail.com', 'alap.raval');
        expect(engineer.getId()).toBe(1234);
    });

    it("Can access name value via getName()", () => {
        const engineer = new Engineer('Alap Raval', 1234, 'alap.raval@gmail.com', 'alap.raval');
        expect(engineer.getName()).toBe('Alap Raval');
    });

    it("Can access email value via getEmail()", () => {
        const engineer = new Engineer('Alap Raval', 1234, 'alap.raval@gmail.com', 'alap.raval');
        expect(engineer.getEmail()).toBe('alap.raval@gmail.com');
    });

    it("Can access role value via getRole()", () => {
        const engineer = new Engineer('Alap Raval', 1234, 'alap.raval@gmail.com', 'alap.raval');
        expect(engineer.getRole()).toBe('Engineer');
    });

    it("Can access github value via getGithub()", () => {
        const engineer = new Engineer('Alap Raval', 1234, 'alap.raval@gmail.com', 'alap.raval');
        expect(engineer.getGithub()).toBe('alap.raval');
    });
});
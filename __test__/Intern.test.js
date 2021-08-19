const Intern = require("./../lib/Intern");

describe("Intern class", () => {
    it("Creates an intern object", () => {
        const intern = new Intern('Ryan Howard', 3312256, 'ryan-howard@dunderscranton.com', 'Kania School of Management');
        expect(typeof (intern)).toBe("object");
    });

    it("Has a property - name", () => {
        const intern = new Intern('Ryan Howard', 3312256, 'ryan-howard@dunderscranton.com', 'Kania School of Management');
        expect(intern.name).toBe('Ryan Howard');
    });

    it("Has a property - id", () => {
        const intern = new Intern('Ryan Howard', 3312256, 'ryan-howard@dunderscranton.com', 'Kania School of Management');
        expect(intern.id).toBe(3312256);
    });

    it("Has a property - email", () => {
        const intern = new Intern('Ryan Howard', 3312256, 'ryan-howard@dunderscranton.com', 'Kania School of Management');
        expect(intern.email).toBe('ryan-howard@dunderscranton.com');
    });

    it("Has a property - school", () => {
        const intern = new Intern('Ryan Howard', 3312256, 'ryan-howard@dunderscranton.com', 'Kania School of Management');
        expect(intern.school).toBe('Kania School of Management');
    });

    it("Can access name value via getName()", () => {
        const intern = new Intern('Ryan Howard', 3312256, 'ryan-howard@dunderscranton.com', 'Kania School of Management');
        expect(intern.getName()).toBe('Ryan Howard');
    });

    it("Can access id value via getId()", () => {
        const intern = new Intern('Ryan Howard', 3312256, 'ryan-howard@dunderscranton.com', 'Kania School of Management');
        expect(intern.getId()).toBe(3312256);
    });

    it("Can access email value via getEmail()", () => {
        const intern = new Intern('Ryan Howard', 3312256, 'ryan-howard@dunderscranton.com', 'Kania School of Management');
        expect(intern.getEmail()).toBe('ryan-howard@dunderscranton.com');
    });

    it("Can access role value via getRole()", () => {
        const intern = new Intern('Ryan Howard', 3312256, 'ryan-howard@dunderscranton.com', 'Kania School of Management');
        expect(intern.getRole()).toBe('Intern');
    });

    it("Can access school value via getSchool()", () => {
        const intern = new Intern('Ryan Howard', 3312256, 'ryan-howard@dunderscranton.com', 'Kania School of Management');
        expect(intern.getSchool()).toBe('Kania School of Management');
    });
});
const Intern = require('../lib/Intern-SubClass')

describe("Intern", () => {
    describe("Intiialization", () => {
        test("Can initialize an intern object", () => {
            const intern = new Intern();
            expect(typeof intern).toBe('object')
        })

        test("Can set name, id, email attributes, and school attributes", () => {
            const intern = new Intern('test', 1, 'test@test.com', 'test-school');
            expect(intern.name).toBe('test')
            expect(intern.id).toBe(1)
            expect(intern.email).toBe('test@test.com')
            expect(intern.school).toBe('test-school')
        })
    })
    describe("Methods", () => {
        const intern = new Intern('test', 1, 'test@test.com', 'test-school');
        test("getName returns the object's name", () => {
            expect(intern.getName()).toBe('test')
        })
        test("getId returns the object's name", () => {
            expect(intern.getId()).toBe(1)
        })
        test("getEmail returns the object's email", () => {
            expect(intern.getEmail()).toBe('test@test.com')
        })
        test("getGitHub returns object's github", () => {
            expect(intern.getSchool()).toBe('test-school')
        })
        test("getRole returns 'Intern'", () => {
            expect(intern.getRole()).toBe('Intern')
        })

    })
})
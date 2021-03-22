const Engineer = require('../lib/Engineer-SubClass')

describe("Engineer", () => {
    describe("Intiialization", () => {
        test("Can initialize an engineer object", () => {
            const engineer = new Engineer();
            expect(typeof engineer).toBe('object')
        })

        test("Can set name, id, email attributes, and github attributes", () => {
            const engineer = new Engineer('test', 1, 'test@test.com', 'test-github');
            expect(engineer.name).toBe('test')
            expect(engineer.id).toBe(1)
            expect(engineer.email).toBe('test@test.com')
            expect(engineer.github).toBe('test-github')
        })
    })
    describe("Methods", () => {
        const engineer = new Engineer('test', 1, 'test@test.com', 'test-github');
        test("getName returns the object's name", () => {
            expect(engineer.getName()).toBe('test')
        })
        test("getId returns the object's name", () => {
            expect(engineer.getId()).toBe(1)
        })
        test("getEmail returns the object's email", () => {
            expect(engineer.getEmail()).toBe('test@test.com')
        })
        test("getGitHub returns object's github", () => {
            expect(engineer.getGithub()).toBe('test-github')
        })
        test("getRole returns 'Engineer'", () => {
            expect(engineer.getRole()).toBe('Engineer')
        })

    })
})
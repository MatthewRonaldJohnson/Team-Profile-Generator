const Manager = require('../lib/Manager-SubClass')

describe("Manager", () => {
    describe("Intiialization", () => {
        test("Can initialize an manager object", () => {
            const manager = new Manager();
            expect(typeof manager).toBe('object')
        })

        test("Can set name, id, email attributes, and officeNumber attributes", () => {
            const manager = new Manager('test', 1, 'test@test.com', 'test-officeNumber');
            expect(manager.name).toBe('test')
            expect(manager.id).toBe(1)
            expect(manager.email).toBe('test@test.com')
            expect(manager.officeNumber).toBe('test-officeNumber')
        })
    })
    describe("Methods", () => {
        const manager = new Manager('test', 1, 'test@test.com', 'test-officeNumber');
        test("getName returns the object's name", () => {
            expect(manager.getName()).toBe('test')
        })
        test("getId returns the object's name", () => {
            expect(manager.getId()).toBe(1)
        })
        test("getEmail returns the object's email", () => {
            expect(manager.getEmail()).toBe('test@test.com')
        })
        test("getGitHub returns object's github", () => {
            expect(manager.getOfficeNumber()).toBe('test-officeNumber')
        })
        test("getRole returns 'Manager'", () => {
            expect(manager.getRole()).toBe('Manager')
        })

    })
})
const Employee = require('../lib/Employee-Class')

describe("Employee", () => {
    describe("Intiialization", () => {
        test("Can initialize an employee object", () => {
            const e = new Employee();
            expect(typeof e).toBe('object')
        })

        test("Can set name, id, and email attributes", () => {
            const e = new Employee('test', 1, 'test@test.com');
            expect(e.name).toBe('test')
            expect(e.id).toBe(1)
            expect(e.email).toBe('test@test.com')
        })
    })
    describe("Methods", () => {
        const e = new Employee('test', 1, 'test@test.com');
        test("getName returns the object's name", () => {
            expect(e.getName()).toBe('test')
        })
        test("getId returns the object's name", () => {
            expect(e.getId()).toBe(1)
        })
        test("getEmail returns the object's email", () => {
            expect(e.getEmail()).toBe('test@test.com')
        })
        test("getRole returns 'Employee'", () => {
            expect(e.getRole()).toBe('Employee')
        })

    })
})
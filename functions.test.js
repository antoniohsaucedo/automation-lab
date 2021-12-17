let myFunctions = require('./function')

test("my return test 2", () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test("my greeting test", () => {
    expect(myFunctions.greeting('James')).toBe('Hello James.')
    expect(myFunctions.greeting('Jill')).toBe('Hello, Jill.')

})

test("my addition test", () => {
    expect(myFunctions.add(1, 2)).toBe(3)   
    expect(myFunctions.add(5, 9)).toBe(14))

})
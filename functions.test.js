const {
    returnTwo,
    greeting,
    add,
    subtract,
    multiply,
    divide
} = require('./functions')

test('Test should return 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('this test should return a string with Hello, and a submitted name.', () => {
    expect(greeting('Stark')).toEqual('Hello, Stark.')
    expect(greeting('Aulora')).toEqual('Hello, Aulora.')
})

describe('Math Functions', () => {

test('This test should return the sum of the submitted numbers', () => {
    expect(add(15, 15)).toEqual(30)
    expect(add(100, 1000)).toEqual(1100)
})

test('This test should return the difference of the submitted numbers', () => {
    expect(subtract(40, 15)).toEqual(25)
    expect(subtract(1000, 450)).toEqual(550)
})

test('This test should return the product of the submitted numbers', () => {
    expect(multiply(5, 6)).toEqual(30)
    expect(multiply(10, 10)).toEqual(100)
})

test('This test should return the quotient of the submitted numbers', () => {
    expect(divide(6, 2)).toEqual(3)
    expect(divide(22, 2)).toEqual(11)
})
})
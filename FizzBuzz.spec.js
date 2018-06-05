const plus = require('./FizzBuzz')

describe('plus', () => {
    it('Should return 1 if send 1', () => {
        const expected = 1
        const result = plus(1)
        expect(expected).toEqual(result)
    })
    it('Should return 2 if send 2', () => {
        const expected = 2
        const result = plus(2)
        expect(expected).toEqual(result)
    })
    it('Should return 4 if send 4', () => {
        const expected = 4
        const result = plus(4)
        expect(expected).toEqual(result)
    })
    it('Should return Fizz if send 3', () => {
        const expected = 'Fizz'
        const result = plus(3)
        expect(expected).toEqual(result)
    })
    it('Should return Buzz if send 5', () => {
        const expected = 'Buzz'
        const result = plus(5)
        expect(expected).toEqual(result)
    })
    it('Should return Buzz if send 10', () => {
        const expected = 'Buzz'
        const result = plus(10)
        expect(expected).toEqual(result)
    })
    it('Should return FizzBuzz if send 15', () => {
        const expected = 'FizzBuzz'
        const result = plus(15)
        expect(expected).toEqual(result)
    })
    it('Should return FizzBuzz if send 15', () => {
        const expected = 'FizzBuzz'
        const result = plus(15)
        expect(expected).toEqual(result)
    })
})
const co = require('./checkout')
const rulse = [
    {
        name: 'A',
        price: 7,
        promotion: 4,
        promotionPrice: 20,
        count: 0
    },
    {
        name: 'B',
        price: 5,
        promotion: 4,
        promotionPrice: 18,
        count: 0
    },
    {
        name: 'C',
        price: 8,
        count: 0
    }
]
const checkout = new co(rulse)
describe('checkout', () => {
    it('Should return 0 if send \'\'', () => {
        const expected = 0
        const item = ''
        const result = checkout.scan(item)
        expect(expected).toEqual(result)     
    })
    it('Should return 7 if send A', () => {
        const expected = 7
        const item = 'A'
        const result = checkout.scan(item)
        expect(expected).toEqual(result)     
    })
    it('Should return 5 if send B', () => {
        const expected = 5
        const item = 'B'
        const result = checkout.scan(item)
        expect(expected).toEqual(result)     
    })
    it('Should return 8 if send C', () => {
        const expected = 8
        const item = 'C'
        const result = checkout.scan(item)
        expect(expected).toEqual(result)     
    })
    it('Should return 14 if send AA', () => {
        const expected = 14
        const item = 'AA'
        const result = checkout.scan(item)
        expect(expected).toEqual(result)     
    })
    it('Should return 10 if send BB', () => {
        const expected = 10
        const item = 'BB'
        const result = checkout.scan(item)
        expect(expected).toEqual(result)     
    })
    it('Should return 16 if send CC', () => {
        const expected = 16
        const item = 'CC'
        const result = checkout.scan(item)
        expect(expected).toEqual(result)     
    })
    it('Should return 24 if send CCC', () => {
        const expected = 24
        const item = 'CCC'
        const result = checkout.scan(item)
        expect(expected).toEqual(result)     
    })
    it('Should return 32 if send CCCC', () => {
        const expected = 32
        const item = 'CCCC'
        const result = checkout.scan(item)
        expect(expected).toEqual(result)     
    })
    it('Should return 20 if send AAAA', () => {
        const expected = 20
        const item = 'AAAA'
        const result = checkout.scan(item)
        expect(expected).toEqual(result)     
    })
})
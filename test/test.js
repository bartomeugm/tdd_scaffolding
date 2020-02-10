import sum from '../src/Sum'

describe('test', () => {
    it('should work as per boolean logic', () => {
        expect(true).toBe(false)
    })
})

describe('Sum', () => {
    it('should work as per sum', () => {
        expect(sum(2,2)).toBe(4)
    })
})
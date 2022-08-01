const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('returns an array', () => {
        let arr = [2, 4, 6, 8, 10, 12]
        let outcome = shuffleArray(arr)
        expect(outcome).toHaveProperty('length')
    })
    test('returns an array of the same length', () => {
        let arr = [2, 4, 6, 8, 10, 12]
        let outcome = shuffleArray(arr)
        expect(outcome.length).toEqual(arr.length)
    })

})
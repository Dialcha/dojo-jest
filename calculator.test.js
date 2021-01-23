const cal = require('./calculator');

describe('Add Operator', () => {
    test('adds 1 + 1 to equals 2', () => {
        var value = cal.add(1, 1);
        expect(value).toBe(2);
    })
    
    test('adds 5 + 2 to equals 7', () => {
        var value = cal.add(5, 2);
        expect(value).toBe(7);
    })
})

describe('Substract Operator', () => {
    test('Substract 2 - 1 to equals 1', () => {
        var value = cal.substract(2, 1);
        expect(value).toBe(1);
    })
    
    test('Susbtract 3 - 1 to equals 2', () => {
        var value = cal.substract(3, 1);
        expect(value).toBe(2);
    })
})

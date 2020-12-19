const multiply = require('./multiply');

describe('test multiply positive scenarios', () =>{

    //toBe matcher
    test('multiply 3*2 should be equal to 6', () =>{
        expect(multiply(3,2)).toBe(6);
    });

    test('multiply 4*5 should not be equal to 62', () =>{
        expect(multiply(4,5)).not.toBe(62);
    });

    //toEqual matcher
    test('object example', () =>{
        const data = {first: 1};
        data['second'] = 2;
        expect(data).toEqual({first: 1, second: 2})
    });

})
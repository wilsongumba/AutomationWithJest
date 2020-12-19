describe('String matchers', () =>{

    //string matchers
    //toMatch
    //sting to string
    test('there is a pool in liverpool', () =>{
        expect('liverpool').toMatch('liverpool');
    });

    //toMatch
    //sting to string patern
    test('there is a pool in liverpool', () =>{
        expect('liverpool').toMatch(/pool/);
    });

    
})

const multiply = require('./multiply');

describe('Number matchers', () =>{

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

    test('multiply 4*5 should be greater than 2', () =>{
        expect(multiply(4,5)).toBeGreaterThan(2);
    });

    test('multiply 4*5 should less than 32', () =>{
        expect(multiply(4,5)).toBeLessThan(32);
    });

    test('multiply 4*5 should less than or equal to 20', () =>{
        expect(multiply(4,5)).toBeLessThanOrEqual(20);
    });
 
})

describe('Truthines matchers', () =>{

    test('check null', () =>{
        const n = null;
        expect(n).toBeNull();
    });

    test('check null', () =>{
        const n = null;
        expect(n).toBeDefined();
    });

    test('check null', () =>{
        const n = null;
        expect(n).not.toBeUndefined();
    });

    test('check null', () =>{
        const n = true;
        expect(n).toBeTruthy();
    });

    test('check null', () =>{
        const n = null;
        expect(n).not.toBeTruthy();
    });

    test('check null', () =>{
        const n = null;
        expect(n).toBeFalsy();
    });

    test('check null', () =>{
        const n = false;
        expect(n).toBeFalsy();
    });


})


describe('Truthines matchers', () =>{

    const carStock = [
        'BMW',
        'Mercedes',
        'Ferrari',
        'Toyota',
    ];

    test('check stock has Ferrari', () =>{
        expect(carStock).toContain('Ferrari');
    });

    test('check stock has no', () =>{
        expect(carStock).not.toContain('Bentley');
    });


})
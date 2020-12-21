const total = require('./integrationExample');

describe('integration testing example', () =>{

    //toBe matcher
    test('total', () =>{
        expect(total(5,20)).toBe('$25');
    });
})
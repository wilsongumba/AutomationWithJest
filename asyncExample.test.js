const fetchDataOverApi = require('./fetchData.js')

describe('user data checks', () => {

    // //non async example
    // test('user john data check', () => {
    //     const data = fetchDataOverApi();
    //     expect(data).toBe('John');
    // });

    //async example
    test('user john data check', async() => {
        const data = await fetchDataOverApi();
        expect(data).toBe('John');
    });

})
const setUpFirst = () => console.log('setting up');
const tearDownAfter = () => console.log('tearing down');

describe('new account checks', () => {
    beforeEach(() => setUpFirst());
    afterEach(() => tearDownAfter());


    test('new account 1 created', () => {
        const account = 'account1'
        expect(account).toEqual('account1')
    });

    test('new account 2 created', () => {
        const account = 'account2'
        expect(account).toEqual('account2')
    });
})
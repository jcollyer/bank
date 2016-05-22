import expect from 'expect'
import accounts from '../src/reducers/accounts'

describe('accounts reducer', () => {
  it('should provide the initial state', () => {
    expect(accounts(undefined, {})).toEqual([
      {
        id: 0,
        accountNumber: "49088898990111",
        accountName: "Savings",
        amount: 5000
      },{
        id: 1,
        accountNumber: "33892878830009",
        accountName: "Checking",
        amount: 200
      }
    ]);
  })
})

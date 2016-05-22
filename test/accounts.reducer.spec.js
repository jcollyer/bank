import expect from 'expect'
import accounts from '../src/reducers/accounts'

describe('accounts reducer', () => {
  it('should provide the initial state', () => {
    expect(accounts(undefined, {})).toEqual([
      {
        id: 0,
        accountNumber: "111111",
        accountName: "Savings",
        amount: 5000
      },{
        id: 1,
        accountNumber: "999999",
        accountName: "Checking",
        amount: 200
      }
    ]);
  })
})

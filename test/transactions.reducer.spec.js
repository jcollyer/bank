import expect from 'expect'
import Transactions from '../src/reducers/transactions'
import * as types from '../src/constants'

const initialState = [
  {
    type: "deposit",
    amount: 350.00,
    accountId: 0,
    date: new Date("5/16/16").toISOString().slice(0, 10).replace(/-/g,"/"),
  },
  {
    type: "deposit",
    amount: 110.00,
    accountId: 1,
    date: new Date("5/18/16").toISOString().slice(0, 10).replace(/-/g,"/"),
  },
  {
    type: "withdrawal",
    amount: 240.00,
    accountId: 0,
    date: new Date("5/21/16").toISOString().slice(0, 10).replace(/-/g,"/"),
  },
  {
    type: "withdrawal",
    amount: 40.00,
    accountId: 1,
    date: new Date("5/21/16").toISOString().slice(0, 10).replace(/-/g,"/"),
  }
];

describe('transactions reducer', () => {
  it('should provide the initial state', () => {
    expect(Transactions(undefined, {})).toEqual(initialState);
  });

  it('handles ADD_TRANSACTION', () => {
    const newTransactionAction = {
      type: types.ADD_TRANSACTION,
      transactionType: "deposit",
      accountId: 0,
      amount: 33
    };

    expect(Transactions([], newTransactionAction)).toEqual([{
      type: "deposit",
      accountId: 0,
      amount: 33,
      date: new Date().toISOString().slice(0, 10).replace(/-/g,"/")
    }]);
  });
});

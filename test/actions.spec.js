import expect from 'expect';
import { addTransaction, showTransactionPanel, hideTransactionPanel } from '../src/actions/transaction-actions';
import * as types from '../src/constants';

describe('addTransaction', () => {
  it('should create ADD_TRANSACTION action', () => {
    expect(addTransaction('deposit', 3, 25)).toEqual({
      type: types.ADD_TRANSACTION,
      transactionType: 'deposit',
      amount: 25,
      accountId: 3
    });
  });
});

describe('showTransactionPanel', () => {
  it('should create SHOW_TRANSACTION_PANEL withdrawal action', () => {
    expect(showTransactionPanel("withdrawal")).toEqual({
      type: types.SHOW_TRANSACTION_PANEL,
      panelType: "withdrawal"
    });
  });
});

describe('hideTransactionPanel', () => {
  it('should create HIDE_TRANSACTION_PANEL action', () => {
    expect(hideTransactionPanel("withdrawal")).toEqual({ type: types.HIDE_TRANSACTION_PANEL });
  });
});

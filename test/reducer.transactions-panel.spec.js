import expect from 'expect';
import transactionsPanel from '../src/reducers/transactions-panel';
import * as types from '../src/constants';

describe('transactionsPanel reducer', () => {
  it('should provide the initial state to be an empty array', () => {
    expect(transactionsPanel(undefined, {})).toEqual([]);
  });

  it('handles SHOW_TRANSACTION_PANEL', () => {
    expect(transactionsPanel(undefined, {
      type: types.SHOW_TRANSACTION_PANEL,
      panelType: "Withdrawal"
    })).toEqual(["Withdrawal"]);
  });

  it('handles HIDE_TRANSACTION_PANEL', () => {
    expect(transactionsPanel(undefined, { type: types.HIDE_TRANSACTION_PANEL })).toEqual([]);
  });
});

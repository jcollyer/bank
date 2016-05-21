import { ADD_TRANSACTION } from '../constants'
import { initialState } from './initial-state'

export default function transactions(state = initialState, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      const newTransaction = {
        type: action.transactionType,
        amount: action.amount,
        accountId: action.accountId
      };
      return [...state, newTransaction];
    default:
      return state;
  }
}

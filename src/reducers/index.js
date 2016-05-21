import { combineReducers } from 'redux';
import accounts from './accounts';
import transactionsPanel from './transactionsPanel';

const rootReducer = combineReducers({
  accounts,
  transactionsPanel
});

export default rootReducer;

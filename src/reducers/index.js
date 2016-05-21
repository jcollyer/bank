import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import accounts from './accounts';
import transactionsPanel from './transactionsPanel';

const rootReducer = combineReducers({
  accounts,
  transactionsPanel,
  form: formReducer
});

export default rootReducer;

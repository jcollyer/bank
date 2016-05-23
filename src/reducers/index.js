import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import accounts from './accounts'
import transactionsPanel from './transactions-panel'
import transactions from './transactions'

const rootReducer = combineReducers({
  accounts,
  transactionsPanel,
  transactions,
  form: formReducer
})

export default rootReducer

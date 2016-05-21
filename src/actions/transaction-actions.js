import { SHOW_TRANSACTION_PANEL, HIDE_TRANSACTION_PANEL, ADD_TRANSACTION } from '../constants'

export function showTransactionPanel(panelType) {
  return { type: SHOW_TRANSACTION_PANEL, panelType }
}

export function hideTransactionPanel() {
  return { type: HIDE_TRANSACTION_PANEL }
}

export function addTransaction(transactionType, accountId, amount) {
  return { type: ADD_TRANSACTION, transactionType, accountId, amount }
}

import { SHOW_TRANSACTION_PANEL, HIDE_TRANSACTION_PANEL } from '../constants'

export function showTransactionPanel(panelType) {
  return { type: SHOW_TRANSACTION_PANEL, panelType }
}

export function hideTransactionPanel() {
  return { type: HIDE_TRANSACTION_PANEL }
}
}

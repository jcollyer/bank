import { SHOW_TRANSACTION_PANEL, HIDE_TRANSACTION_PANEL } from '../constants'

export default function transactionPanel(state = [], action) {
  switch (action.type) {
    case SHOW_TRANSACTION_PANEL:
      return action.panelType
    case HIDE_TRANSACTION_PANEL:
      return []
    default:
      return state
  }
}

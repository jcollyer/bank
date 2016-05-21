export const initialState = {
  accounts: [
    {
      id: 0,
      accountNumber: "111111",
      accountName: "Savings",
      amount: 5000
    },{
      id: 1,
      accountNumber: "999999",
      accountName: "Checking",
      amount: 200
    }
  ],
  transactions: [
    {
      type: "Deposit",
      amount: 350.00,
      accountId: 0
    },
    {
      type: "Deposit",
      amount: 110.00,
      accountId: 1
    },
    {
      type: "Withdrawal",
      amount: 240.00,
      accountId: 0
    }
  ]
}

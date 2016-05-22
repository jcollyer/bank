export const initialState = {
  accounts: [
    {
      id: 0,
      accountNumber: "49088898990111",
      accountName: "Savings",
      amount: 5000
    },{
      id: 1,
      accountNumber: "33892878830009",
      accountName: "Checking",
      amount: 200
    }
  ],
  transactions: [
    {
      type: "deposit",
      amount: 350.00,
      accountId: 0,
      date: new Date("5/16/16").toISOString().slice(0, 10).replace(/-/g,"/"),
    },
    {
      type: "deposit",
      amount: 110.00,
      accountId: 1,
      date: new Date("5/18/16").toISOString().slice(0, 10).replace(/-/g,"/"),
    },
    {
      type: "withdrawal",
      amount: 240.00,
      accountId: 0,
      date: new Date("5/21/16").toISOString().slice(0, 10).replace(/-/g,"/"),
    },
    {
      type: "withdrawal",
      amount: 40.00,
      accountId: 1,
      date: new Date("5/21/16").toISOString().slice(0, 10).replace(/-/g,"/"),
    }
  ]
}

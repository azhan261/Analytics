//getting API for showing all the data
export const getDebitLedgers = () => fetch("http://localhost:3001/debitLedger").then(res => res.json())

//getting API for inserting the data
export const createDebitLedgers = (todo) => fetch("http://localhost:3001/debitLedger/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateDebitLedger = (todo, id) => fetch(`http://localhost:3001/debitLedger/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getDebitLedger = (id) => fetch(`http://localhost:3001/debitLedger/${id}`).then(res => res.json())
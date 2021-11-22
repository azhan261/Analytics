//getting API for showing all the data
export const getLedgers = () => fetch("http://localhost:3001/ledger-control").then(res => res.json())

//getting API for inserting the data
export const createLedgers = (todo) => fetch("http://localhost:3001/ledger-control/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateLedger = (todo, id) => fetch(`http://localhost:3001/ledger-control/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getLedger = (id) => fetch(`http://localhost:3001/ledger-control/${id}`).then(res => res.json())
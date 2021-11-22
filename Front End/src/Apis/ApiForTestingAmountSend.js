//getting API for showing all the data
export const getTestingAmountSend = () => fetch("http://localhost:3001/testingAmountSend").then(res => res.json())

//getting API for inserting the data
export const createTestingAmountSend = (todo) => fetch("http://localhost:3001/testingAmountSend/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTestingAmountSend = (todo, id) => fetch(`http://localhost:3001/testingAmountSend/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getPurchaseInvoice = (id) => fetch(`http://localhost:3001/purchaseInvoice/${id}`).then(res => res.json())
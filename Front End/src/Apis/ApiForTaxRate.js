//getting API for showing all the data
export const getTaxRates = () => fetch("http://localhost:3001/taxRate").then(res => res.json())

//getting API for inserting the data
export const createTaxRates = (todo) => fetch("http://localhost:3001/taxRate/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTaxRate = (todo, id) => fetch(`http://localhost:3001/taxRate/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getTaxRate = (id) => fetch(`http://localhost:3001/taxRate/${id}`).then(res => res.json())
//getting API for showing all the data
export const getAmountControls = () => fetch("http://localhost:3001/amount-control").then(res => res.json())

//getting API for inserting the data
export const createAmountControls = (todo) => fetch("http://localhost:3001/amount-control/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAmountControl = (todo, id) => fetch(`http://localhost:3001/amount-control/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getAmountControl = (id) => fetch(`http://localhost:3001/amount-control/${id}`).then(res => res.json())
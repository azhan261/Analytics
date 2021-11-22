//getting API for showing all the data
export const getAgedReceivableReferences = () => fetch("http://localhost:3001/agedReceivableReference").then(res => res.json())

//getting API for inserting the data
export const createAgedReceivableReferences = (todo) => fetch("http://localhost:3001/agedReceivableReference/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAgedReceivableReference = (todo, id) => fetch(`http://localhost:3001/agedReceivableReference/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getAgedReceivableReference = (id) => fetch(`http://localhost:3001/agedReceivableReference/${id}`).then(res => res.json())
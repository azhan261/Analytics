//getting API for showing all the data
export const getAgedPayableReferences = () => fetch("http://localhost:3001/agedPayableReference").then(res => res.json())

//getting API for inserting the data
export const createAgedPayableReferences = (todo) => fetch("http://localhost:3001/agedPayableReference/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAgedPayableReference = (todo, id) => fetch(`http://localhost:3001/agedPayableReference/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getAgedPayableReference = (id) => fetch(`http://localhost:3001/agedPayableReference/${id}`).then(res => res.json())
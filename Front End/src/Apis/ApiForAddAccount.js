//getting API for showing all the data
export const getAddAccounts = () => fetch("http://localhost:3001/addAccount").then(res => res.json())

//getting API for inserting the data
export const createAddAccounts = (todo) => fetch("http://localhost:3001/addAccount/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAddAccount = (todo, id) => fetch(`http://localhost:3001/addAccount/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getAddAccount = (id) => fetch(`http://localhost:3001/addAccount/${id}`).then(res => res.json())
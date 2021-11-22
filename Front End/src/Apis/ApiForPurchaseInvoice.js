import axios from "axios"

//getting API for showing all the data
export const getPurchaseInvoices = () => fetch("http://localhost:3001/purchaseInvoice").then(res => res.json())
export const getDirectCostsInvoices = () => fetch("http://localhost:3001/directCosts").then(res => res.json())
export const getCurrentAssetsInvoices = () => fetch("http://localhost:3001/currentAssets").then(res => res.json())
export const getNonCurrentAssetsInvoices = () => fetch("http://localhost:3001/nonCurrentAssets").then(res => res.json())
export const getFixedAssetsInvoices = () => fetch("http://localhost:3001/fixedAssets").then(res => res.json())



//getting API for inserting the data
export const createPurchaseInvoice = (todo) => fetch("http://localhost:3001/purchaseInvoice/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const getAllPurchaseInvoiceAccountsValuesController = id => (
	console.log(id),
	axios.post(`http://localhost:3001/all-purchase-accounts`)
		.then(res => res.data, )
)
export const getAllPurchaseInvoiceAccountsSpecificValuesController = id => (
	console.log(id),
	axios.post(`http://localhost:3001/all-purchase-accounts/specific/${id}`)
		.then(res => res.data, )
)


export const createDirectCostsInvoice = (todo) => fetch("http://localhost:3001/directCosts/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const createAllPurchaseInvoiceAccountsValues = (todo) => fetch("http://localhost:3001/all-purchase-accounts/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const createCurrentAssetsInvoice = (todo) => fetch("http://localhost:3001/currentAssets/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const createNonCurrentAssetsInvoice = (todo) => fetch("http://localhost:3001/nonCurrentAssets/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const createFixedAssetsInvoice = (todo) => fetch("http://localhost:3001/fixedAssets/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updatePurchaseInvoice = (todo, id) => fetch(`http://localhost:3001/purchaseInvoice/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const updateDirectCostsInvoice = (todo, id) => fetch(`http://localhost:3001/directCosts/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
}) 

export const updateCurrentAssetsInvoice = (todo, id) => fetch(`http://localhost:3001/currentAssets/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
}) 

export const updateNonCurrentAssetsInvoice = (todo, id) => fetch(`http://localhost:3001/nonCurrentAssets/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
}) 

export const updateFixedAssetsInvoice = (todo, id) => fetch(`http://localhost:3001/fixedAssets/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
}) 

//getting API for getting specific data
export const getPurchaseInvoice = (id) => fetch(`http://localhost:3001/purchaseInvoice/${id}`).then(res => res.json())
export const getDirectCostsInvoice = (id) => fetch(`http://localhost:3001/directCosts/${id}`).then(res => res.json())
export const getCurrentAssetsInvoice = (id) => fetch(`http://localhost:3001/currentAssets/${id}`).then(res => res.json())
export const getNonCurrentAssetsInvoice = (id) => fetch(`http://localhost:3001/nonCurrentAssets/${id}`).then(res => res.json())
export const getFixedAssetsInvoice = (id) => fetch(`http://localhost:3001/fixedAssets/${id}`).then(res => res.json())

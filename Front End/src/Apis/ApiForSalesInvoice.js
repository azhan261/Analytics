//getting API for showing all the data

import axios from 'axios';

export const getSalesInvoices = () => fetch("http://localhost:3001/salesInvoice").then(res => res.json())
export const getCurrentLiabilityInvoices = () => fetch("http://localhost:3001/currentLiability").then(res => res.json())
export const getNonCurrentLiabilityInvoices = () => fetch("http://localhost:3001/nonCurrentLiability").then(res => res.json())
export const getEquityInvoices = () => fetch("http://localhost:3001/equity").then(res => res.json())


//export const getAnswers = () => fetch("http://localhost:3001//answers").then(res => res.json())

export const getAllSalesInvoiceAccountsValuesController = id => (
	console.log(id),
	axios.post(`http://localhost:3001/all-sales-accounts`)
		.then(res => res.data, )
)
export const getAllSalesInvoiceAccountsSpecificValuesController = id => (
	console.log(id),
	axios.post(`http://localhost:3001/all-sales-accounts/specific/${id}`)
		.then(res => res.data, )
)

export const createAllSalesInvoiceAccountsValuesController = (todo) => fetch("http://localhost:3001/all-sales-accounts/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})

//getting API for inserting the data
export const createSalesInvoice = (todo) => fetch("http://localhost:3001/salesInvoice/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
}) 

export const createCurrentLiabilityInvoice = (todo) => fetch("http://localhost:3001/currentLiability/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
}) 

export const createNonCurrentLiabilityInvoice = (todo) => fetch("http://localhost:3001/nonCurrentLiability/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const createEquityInvoice = (todo) => fetch("http://localhost:3001/equity/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for updating specific data
export const updateSalesInvoice = (todo, id) => fetch(`http://localhost:3001/salesInvoice/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})

export const updateCurrentLiabilityInvoice = (todo, id) => fetch(`http://localhost:3001/currentLiability/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


export const updateNonCurrentLiabilityInvoice = (todo, id) => fetch(`http://localhost:3001/nonCurrentLiability/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const updateEquityInvoice = (todo, id) => fetch(`http://localhost:3001/equity/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getSalesInvoice = (id) => fetch(`http://localhost:3001/salesInvoice/${id}`).then(res => res.json())
export const getCurrentLiabilityInvoice = (id) => fetch(`http://localhost:3001/currentLiability/${id}`).then(res => res.json())
export const getNonCurrentLiabilityInvoice = (id) => fetch(`http://localhost:3001/nonCurrentLiability/${id}`).then(res => res.json())
export const getEquityInvoice = (id) => fetch(`http://localhost:3001/equity/${id}`).then(res => res.json())
const POST = "POST"

const HEADER = { 'Content-Type': 'application/json'}

const BASE_ROUTE = "http://localhost:5000"

export const LOGIN = { ROUTE : BASE_ROUTE + "/login", HEADER, METHOD: POST }

export const SIGNUP = { ROUTE : BASE_ROUTE + "/signup", HEADER, METHOD: POST  }



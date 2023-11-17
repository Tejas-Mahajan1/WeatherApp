/* eslint-disable no-unused-vars */
const {createPool} = require('mysql')
const pool = createPool({
    host :"localhost",
    user : "root",
    password: "password", // your mysql root passowrd here
    connectionLimit :10
})

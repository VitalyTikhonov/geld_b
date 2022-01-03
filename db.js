const { Pool } = require('pg')
const pool = new Pool({
  user: "postgres",
  password: "ZaNJx",
  host: "localhost",
  port: 5432,
  database: "geld_v1"
})
console.log("db module visited")
module.exports = pool

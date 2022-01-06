const { Pool } = require('pg')
const pool = new Pool({
  user: "postgres",
  password: "ZaNJx",
  host: "localhost",
  port: 5432,
  database: "geld_v1"
})
module.exports = pool

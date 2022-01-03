const db = require('../db')

async function createAsset(req, res) {
  const { name, description } = req.body
  // console.log(req)
  // console.log(name, description)
  const dbResponse = await db.query(
    'INSERT INTO asset (name, description) values ($1, $2) RETURNING *',
    [name, description]
  )
  res.json(dbResponse.rows[0])
}

async function getAllAssets(req, res) {
  const dbResponse = await db.query('SELECT * from asset')
  res.json(dbResponse.rows)
}

module.exports = {
  createAsset,
  getAllAssets
}

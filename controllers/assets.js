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

async function getAsset(req, res) {
  const { id } = req.params
  const dbResponse = await db.query('SELECT * from asset where id = $1', [id])
  res.json(dbResponse.rows[0])
}

async function updateAsset(req, res) {
  const { id, name, description } = req.body
  const dbResponse = await db.query(
    'UPDATE asset set name = $1, description = $2 where id = $3 RETURNING *',
    [name, description, id]
  )
  res.json(dbResponse.rows[0])
}

module.exports = {
  createAsset,
  getAllAssets,
  getAsset,
  updateAsset
}

const db = require('../db')

async function createTransaction(req, res) {
  const { timestamp, asset, categories, value, comments } = req.body
  const dbResponse = await db.query(
    'INSERT INTO transactions (timestamp, asset, categories, value, comments) values ($1, $2, $3, $4, $5) RETURNING *',
    [timestamp, asset, categories, value, comments]
  )
  res.json(dbResponse.rows[0])
}

async function getAllTransactions(req, res) {
  const dbResponse = await db.query('SELECT * from transactions')
  res.json(dbResponse.rows)
}

async function getTransaction(req, res) {
  const { id } = req.params
  const dbResponse = await db.query('SELECT * from transactions where id = $1', [id])
  res.json(dbResponse.rows[0])
}

async function updateTransaction(req, res) {
  /* The columns that do not appear in the SET clause retain their original values. */
  const { id, timestamp, asset, categories, value, comments } = req.body
  let coreQueryBits = []
  const values = [id]
  let index = 2
  if (timestamp) {
    coreQueryBits.push(`timestamp = $${index}`)
    values.push(timestamp)
    index++
  }
  if (asset) {
    coreQueryBits.push(`asset = $${index}`)
    values.push(asset)
    index++
  }
  if (categories) {
    coreQueryBits.push(`categories = $${index}`)
    values.push(categories)
    index++
  }
  if (value) {
    coreQueryBits.push(`value = $${index}`)
    values.push(value)
    index++
  }
  if (comments) {
    coreQueryBits.push(`comments = $${index}`)
    values.push(comments)
    // index++
  }
  /* /\w+/ig.exec(JSON.stringify(Object.keys({variableName})))[0] */
  const coreQuery = coreQueryBits.join(', ')
  const dbResponse = await db.query(
    `UPDATE transactions SET ${coreQuery} WHERE id = $1 RETURNING *`,
    values
  )
  res.json(dbResponse.rows[0])
}

async function deleteTransaction(req, res) {
  const { id } = req.params
  const dbResponse = await db.query('DELETE FROM transactions WHERE id = $1 RETURNING id', [id])
  res.json({ data: dbResponse.rowCount === 1 ? `Deleted row id: ${dbResponse.rows[0].id}` : 'Ошибка: транзакция, которую требовалось удалить, не найдена.' })
}

module.exports = {
  createTransaction,
  getAllTransactions,
  updateTransaction,
  getTransaction,
  deleteTransaction
}

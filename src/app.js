const express = require('express');
const routes = require('./routes');
require('./data_simulation_for_dev/data-formation');

const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json());
app.use(routes)
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))

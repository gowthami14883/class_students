const express = require('express');
require('dotenv').config();

const app = express();
const routes = require('./route');

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

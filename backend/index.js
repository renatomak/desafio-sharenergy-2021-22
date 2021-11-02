const express = require('express');
const cors = require('cors');
const routers = require('./src/routers');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(routers);

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

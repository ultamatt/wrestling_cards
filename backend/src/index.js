const cors = require('cors');
const express = require('express');
const sampleSize = require('lodash/fp/sampleSize');
const wreslters = require('../wrestlers.json');

const app = express();

const list = (number = wreslters.length, type) => {
  const data = type === 'tag' ? wreslters.tags : wreslters.singles;
  return sampleSize(number, [...data]);
};

app.use(cors());
app.get('/', (req, res) => res.json({ data: list(req.query.amount, req.query.type) }));

app.listen(3001, () => console.log('Example app listening on port 3001!')); // eslint-disable-line no-console

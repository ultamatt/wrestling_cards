const cors = require('cors');
const express = require('express');
const sampleSize = require('lodash/fp/sampleSize');
const wrestlers = require('../wrestlers.json');

const app = express();

const list = (number = wrestlers.singles.length, daId) => {
    const data = wrestlers.singles;
    if (daId != null) {
        return data.filter(wrestler => parseInt(wrestler.id, 10) === parseInt(daId, 10));
    }
    return sampleSize(number, [...data]);
};

app.use(cors());
app.get('/wrestler', (req, res) => res.json({ data: list(req.query.amount, null) }));
app.get('/wrestler/:id', (req, res) => res.json({ data: list(1, req.params.id) }));

app.listen(3001, () => console.log('Example app listening on port 3001!')); // eslint-disable-line no-console

module.exports = app;

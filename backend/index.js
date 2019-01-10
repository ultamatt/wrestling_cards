const express = require('express')
const app = express()
const cors = require('cors')
const sampleSize = require('lodash/fp/sampleSize');
console.info(sampleSize)
const wreslters = require('./wrestlers.json');

const numberOptions = [8, 16, 32];
const create = (number = 32, type) => {
    const data = type === 'tag' ? wreslters.tags : wreslters.singles;
    number = numberOptions.indexOf(Number(number)) === -1 ? numberOptions[2] : numberOptions[numberOptions.indexOf(Number(number))];
    const _wreslters = [...data];
    console.info(Number(number))
    return sampleSize(number, _wreslters);
}

app.use(cors())
app.get('/', (req, res) => {
    console.info(req.query)
    return res.json({ data: create(req.query.amount, req.query.type) })
});

app.listen(3001, () => console.log('Example app listening on port 3001!'))

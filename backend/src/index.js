const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const _ = require('lodash');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

const app = express();

const list = (req, res) => {
    let returnable = null;
    if (req.params.id != null) {
        returnable = db.get('wrestlers')
            .find({ id: parseInt(req.params.id, 10) })
            .value();
        return res.json({ data: returnable });
    }
    returnable = db.get('wrestlers')
        .value();
    return res.json({ data: returnable });
};

const create = (req, res) => {
    const { id, name } = req.body;
    if (id != null && name != null) {
        const daWrestler = { id: parseInt(id, 10), name };
        db.get('wrestlers')
            .push(daWrestler)
            .write();
        return res.json({ data: daWrestler });
    }
    res.status(400);
    return res.json({ message: 'Please pass id and name to create a new wrestler' });
};

// const update = (req, res) => {
//     const { id, name } = req.body;
//     if (id != null && name != null) {
//         const daWrestler = { id, name };
//         db.get('wrestlers')
//             .push(daWrestler)
//             .write();
//         wrestlers.singles.push(daWrestler);
//         return res.json(daWrestler);
//     }
//     res.status(400);
//     return res.json({ message: 'Please pass id and name to create a new wrestler' });
// };
//
// const destroy = (req, res) => {
//     const { id, name } = req.body;
//     if (id != null && name != null) {
//         const daWrestler = { id, name };
//         wrestlers.singles.push(daWrestler);
//         return res.json(daWrestler);
//     }
//     res.status(400);
//     return res.json({ message: 'Please pass id and name to create a new wrestler' });
// };

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/wrestler', list);
app.get('/wrestler/:id', list);
app.post('/wrestler', create);
// app.put('/wrestler', update);
// app.delete('/wrestler', destroy);

app.listen(3001, () => console.log('Example app listening on port 3001!')); // eslint-disable-line no-console

module.exports = app;

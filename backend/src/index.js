const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const images = multer({ dest: 'public/images/' });
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const uuid = require('uuid');

const adapter = new FileSync('db.json');
const db = low(adapter);

const app = express();

const list = (req, res) => {
    let returnable = null;
    if (req.params.id != null) {
        returnable = db.get('wrestlers')
            .find({ id: req.params.id })
            .value();
        return res.json({ data: returnable });
    }
    returnable = db.get('wrestlers')
        .value();
    return res.json({ data: returnable });
};

const create = (req, res) => {
    const { name } = req.body;
    if (name != null) {
        const newId = uuid.v4();
        const daWrestler = {
            id: newId, name, desctiption: '', picture: '',
        };
        db.get('wrestlers')
            .push(daWrestler)
            .write()
            .find({ id: newId });
        return res.json({ data: daWrestler });
    }
    res.status(400);
    return res.json({ message: 'Please pass id and name to create a new wrestler' });
};

const update = (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400);
        return res.json({ message: 'Please pass id and name or description to update a wrestler' });
    }

    const { description } = req.body;

    let returnable = null;
    if (id != null) {
        returnable = db.get('wrestlers')
            .find({ id })
            .assign({ description })
            .write();
        return res.json({ data: returnable });
    }
    res.status(400);
    return res.json({ message: 'Please pass id and name to update a wrestler' });
};

const upload = (req, res) => {
    if (!req.file) {
        res.status(400);
        return res.json({ message: 'Please pass id and picture to upload a picture to a wrestler' });
    }
    const { id } = req.params;
    const { filename } = req.file;
    let returnable = null;
    if (id != null) {
        returnable = db.get('wrestlers')
            .find({ id })
            .assign({ picture: filename })
            .write();
        return res.json({ data: returnable });
    }
    res.status(400);
    return res.json({ message: 'Please pass id and picture to upload a picture to a wrestler' });
};

const destroy = (req, res) => {
    const { id } = req.params;
    let returnable = null;
    if (id != null) {
        returnable = db.get('wrestlers')
            .remove({ id })
            .write();
        return res.json({ data: returnable });
    }
    res.status(400);
    return res.json({ message: 'Please pass id and name to update a wrestler' });
};

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/', express.static('public'));

app.get('/wrestler', list);
app.get('/wrestler/:id', list);
app.post('/wrestler', create);
app.put('/wrestler/:id', update);
app.post('/wrestler/:id/image', images.single('file'), upload);
app.delete('/wrestler/:id', destroy);

app.listen(3001, () => console.log('Example app listening on port 3001!')); // eslint-disable-line no-console

module.exports = app;

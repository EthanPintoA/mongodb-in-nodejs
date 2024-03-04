// Budget API

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const crud = require('./crud');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public'));

app.get('/budget', (req, res) => {
    crud.getAllData().then((data) => {
        res.json(data);
    });
});

app.post('/budget/insert', (req, res) => {
    if (!req.body || !req.body.title || !req.body.budget || !req.body.color) {
        res.status(400).send('Invalid request');
        return;
    }

    crud.insertData(req.body).then(() => {
        res.status(201).send('Data inserted');
    });
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});

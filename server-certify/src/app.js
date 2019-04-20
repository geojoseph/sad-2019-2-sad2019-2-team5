
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(cors())
app.use(bodyParser.json());

app.post('/register', (req, res) => {
// eslint-disable-next-line no-console
    console.log(req.body.email);
    res.send({
        message: `Hello ${req.body.email}! user was registered congrats..enjoy` });
});

app.listen(process.env.PORT || 8081);


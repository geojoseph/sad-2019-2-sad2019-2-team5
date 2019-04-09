
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(cors())
app.use(bodyParser.json());

app.get('/status', function(req, res){
// eslint-disable-next-line no-console
    console.log('status request');
    res.send({
        message: 'status' });
});

app.listen(process.env.PORT || 8081);


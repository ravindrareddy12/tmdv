const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');
const db= require('./Connection/db')

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.use('/',require('./routers'))
app.listen(3000, () => {
    console.log('listening on port 3000');
})
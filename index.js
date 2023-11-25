const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const cors = require('cors');
const db= require('./Connection/db')

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.use('/',require('./routers'))
app.listen(port, () => {
    console.log('listening on port 3000');
})
const express = require('express');
const app = express();
const port = 4000; 
const budget = require('./server_S3.json');
const cors = require('cors')
app.use(cors())

app.use('/', express.static('public'));


app.get('/hello', (reg, res)=> {
    res.send('Hello World!');
});

app.get('/budget', (reg, res)=> {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
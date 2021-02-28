const express = require('express');
const router = require('./router');
const db = require('./db');

const app = express();
const port = 3000;

//Midelwares
app.use(express.json());
app.use(router);




db.then(() => {
    app.listen(port, () => {
        console.log(`Server app listening at http://localhost:${port}`)
    })
}).catch(console.log)
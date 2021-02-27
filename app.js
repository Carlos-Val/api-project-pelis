const express = require("express");
const router = require("./routes");
const mongoose = require("./db");

const app = express();
const port = 3000;


// Middlewares
app.use(express.json());
app.use(router)




const conectionDb = require("./db");
conectionDb.then(() => {
    app.listen(port, () => console.log(`Listening at ${port}`));
});
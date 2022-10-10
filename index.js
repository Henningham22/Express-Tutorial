const express = require("express");

const app = express();

const routes = require("./routes/chelsea");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/getError', (req, res, next) => {
    next(error('message'))
});

app.use("/chelsea", routes);

app.use((err, req, res, next) => {
    console.log(err.stack);
    next(err);
});
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

const server = app.listen(4002, () => console.log(`Server successfully started on port ${server.address().port}`));
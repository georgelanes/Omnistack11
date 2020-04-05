const express = require("express");
const cors = require("cors");
const http = require("http");
const { errors } = require("celebrate");

const routes = require("./routes");

const app = express();
//const server = http.Server(app);

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errors());

//server.listen(3333);
app.listen(3333);

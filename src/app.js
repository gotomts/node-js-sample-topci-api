const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/related-news', require("./router/related-news.js"));

app.listen(3000);

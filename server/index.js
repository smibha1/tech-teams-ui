const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
/* ------------------ SERVER  ------------------ */
let app = express();
// Serve up the static files!
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors);

const port = 3001;
app.listen(port, function () {
  console.log(`Server Starts on ${port}`);
});

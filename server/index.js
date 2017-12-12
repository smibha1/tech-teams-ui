const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
// const cors = require('cors');
/* ------------------ SERVER  ------------------ */
const app = express();
// Serve up the static files!
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors);

app.use('/', express.static(path.join(__dirname, '/../client/dist')));
// app.use('/api', router)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server Starts on ${port}`);
});

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/users', function (req, res) {
  // hardcoded JSON data pretending to be a database result
  res.json([
    {"id": "1", "firstname": "Bob", "lastname": "Smith", "email": "bobgob@gmail.com"},
    {"id": "2", "firstname": "Tammu", "lastname": "Norton", "email": "tam@gmail.com"},
    {"id": "3", "firstname": "Tina", "lastname": "Lee", "email": "tina.lee@hotmail.com"},
  ]);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

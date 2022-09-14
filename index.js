const express = require('express')
const app = express()

let pool = require('./config/conection')

app.get('/', function (req, res) {
    pool.query(
        'SELECT * FROM pessoas',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          //console.log(fields); // fields contains extra meta data about results, if available
        }
      );
  res.send('Hello World')
})

app.listen(3000)
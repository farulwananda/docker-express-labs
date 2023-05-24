var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var routes = require('./routes/routes');

var app = express();
var port = process.env.PORT || '3000';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send({
    message: 'connection success',
  });
});

app.use('/profile', routes);

app.listen(port, function () {
  console.log(`app listening on port ${port}!`)
});

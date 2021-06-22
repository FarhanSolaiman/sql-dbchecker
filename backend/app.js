var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

app.listen(3000, () => console.log(`Server started at port: 3000`));

module.exports = app;

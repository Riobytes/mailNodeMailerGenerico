/**
 * Created by xaipo on 8/21/2017.
 */
var express = require('express');
var bodyParser= require('body-parser');
var cors = require('cors');

var app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());// permite a

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use('/mail', require('./Routes/RouteMail'));
app.listen(3000);
console.log("servidor ejecutando en el puerto 3000");
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.listen('3001', function(){
  console.log("Successfully listening on : 3001")
})
var password = require('config.js')

var connectionString = password.password;

var massiveinstance = massive.connectSync({connectionString : connectionString});

app.set('db', massiveinstance);
var db = app.get('db');


var controller = require('./controller.js');

app.post('/products', controller.create);
app.get('/products', controller.getAll);
app.get('/products/:id', controller.getOne);
app.put('/products/update/description/:id', controller.update_description);
app.put('/products/update/price/:id', controller.update_price);
app.delete('/products/delete/:id', controller.destroy);

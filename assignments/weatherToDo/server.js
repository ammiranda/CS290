var request = require('request');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var credentials = require('./credentials');

console.log(credentials.owm);

var app = express();

app.use(session({saveUninitialized: false, resave: false, secret: 'SuperSecretPassword'}));
app.use(express.static('public'));
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 4000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res, next) {
  var ctx = {};
  if (!req.session.name) {
    res.render('newSession', ctx);
    return;
  }
  ctx.name = req.session.name;
  ctx.toDoCount = req.session.toDo.length || 0;
  ctx.toDo = req.session.toDo || [];
  console.log(ctx.toDo);
  res.render('toDo', ctx);
});

app.post('/', function(req, res) {
  var ctx = {};

  if (req.body['New List']) {
    req.session.name = req.body.name;
    req.session.toDo = [];
    req.session.curId = 0;
  }

  if (!req.session.name) {
    res.render('newSession', ctx);
    return;
  }

  if (req.body['Add Item']) {
    req.session.toDo.push({'name': req.body.name, 'id': req.session.curId});
    req.session.curId++;
  }

  if (req.body['Done']) {
    req.session.toDo = req.session.toDo.filter(function(e) {
      return e.id != req.body.id;
    })
  }

  ctx.name = req.session.name;
  ctx.toDoCount = req.session.toDo.length;
  ctx.toDo = req.session.toDo;
  console.log(ctx.toDo);
  res.render('toDo', ctx);
});

app.use(function(req, res){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.log(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on port 4000');
});

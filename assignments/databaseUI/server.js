var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var pool = mysql.createPool({
   host: 'localhost',
   user: 'student',
   password: 'default',
   database: 'student'
});

pool.query("DROP TABLE IF EXISTS todo", function(err) {
   var createString = "CREATE TABLE todo(" + 
   "id INT PRIMARY KEY AUTO_INCREMENT," + 
   "name VARCHAR(255) NOT NULL," +
   "done BOOLEAN," + 
   "due DATE)";
   pool.query(createString, function(err) {
      if (err) console.log(err);
      console.log("todo table created");
   });
});

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 2000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('form');
});

app.get('/tasks', function(req, res) {

});

app.post('/tasks', function(req, res) {

});

app.post('/', function(req, res){
	res.render('form');
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
	console.log('Express started on port 2000');
});

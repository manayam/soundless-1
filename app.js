
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var history = require('./routes/history');
var diag = require('./routes/diag');
var diag2 = require('./routes/diag2');
var diag3 = require('./routes/diag3');
var diag4 = require('./routes/diag4');
var diag5 = require('./routes/diag5');
var diag6 = require('./routes/diag6');
var diag7 = require('./routes/diag7');
var diag8 = require('./routes/diag8');
var diag9 = require('./routes/diag9');
var diag10 = require('./routes/diag10');
var diag11 = require('./routes/diag11');
var diag12 = require('./routes/diag12');
var diagr = require('./routes/diagr');
var setting = require('./routes/setting');
var warn = require('./routes/warn');
var warn2 = require('./routes/warn2');
var results = require('./routes/results');
var add = require('./routes/add');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', index.view);
app.get('/index.handlebars', index.view);
app.get('/diag.handlebars', diag.view);
app.get('/diag2.handlebars', diag2.view);
app.get('/diag3.handlebars', diag3.view);
app.get('/diag4.handlebars', diag4.view);
app.get('/diag5.handlebars', diag5.view);
app.get('/diag6.handlebars', diag6.view);
app.get('/diag7.handlebars', diag7.view);
app.get('/diag8.handlebars', diag8.view);
app.get('/diag9.handlebars', diag9.view);
app.get('/diag10.handlebars', diag10.view);
app.get('/diag11.handlebars', diag11.view);
app.get('/diag12.handlebars', diag12.view);
app.get('/diagr.handlebars', diagr.view);
app.get('/setting.handlebars', setting.view);
app.get('/history.handlebars', history.view);
app.get('/historyalt.handlebars', history.viewAlt);
app.get('/warn.handlebars', warn.view);
app.get('/warn2.handlebars', warn2.view);
app.get('/add', add.addFriend);
app.get('/results.handlebars', results.view);

app.use(express.static(path.join(__dirname, 'views')));

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


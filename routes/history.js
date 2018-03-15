var data = require('../data.json');

exports.view = function(req, res){
  res.render('history',data);
};

exports.viewAlt = function(req, res){
  res.render('historyalt',data);
};

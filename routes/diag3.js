var data = require('../data.json');
exports.view = function(req, res){
  res.render('diag3',data);
};
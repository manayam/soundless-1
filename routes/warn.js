
var data = require('../data1.json');

exports.view = function(req, res){
  console.log(data);
  res.render('warn',data);
};

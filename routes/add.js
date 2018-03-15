var data = require("../data.json");

exports.addFriend = function(req, res) {    
    var newdescription = req.query.description;
    var newfriend = {}; 
	newfriend["description"] = newdescription;
    data.recommends.push(newfriend);
    res.render('history',data);
 }


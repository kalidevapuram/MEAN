var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function() 
{
	 return  {
		  get_user: function(req, res) {
			     Friend.find({}, function(err, results) 
			     {
			       if(err){
			         console.log(err);
			       } else{

			         res.json(results);
			       }
			   });
		  },
		 
		 add_user: function(req, res) {
		 	console.log("POST DATA", req.body);

		 	var data = new Friend(req.body);
		 	data.save(function(err, users) {
		 		if(err) {
		 			console.log("data did not enter properly");
		 			console.log(err)
		 		}
		 		else {
		 			res.json(data);
		 		}
		 	});
		 },
		 delete_friend: function(req, res){
			Friend.remove({_id: req.params.id}, function(err, data){
				if(err){
					console.log(err);
					console.log('looks like we have an error in delete_friend Controller');
				} else {
					res.json(data);
				}
			})
		},
	}

})();


// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports
var friends = require('./../controllers/friends.js');

module.exports = function(app) {
  // verb: get, plural of target as the URI is the RESTful index method (it returns all friends)
    
    app.post('/friends', function(req, res){
    	friends.add_user(req, res);
    })
    app.get('/friends', function(req, res) {
		  friends.get_user(req, res);
		})

    app.post('/friends/:id/delete', function(req, res){
		console.log('im getting the route');
		friends.delete_friend(req, res);
	})
  };
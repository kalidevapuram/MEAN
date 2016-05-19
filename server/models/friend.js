
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Friend', FriendSchema);
// notice that we aren't exporting anything -- this is because this file will be run when we require it using our config f
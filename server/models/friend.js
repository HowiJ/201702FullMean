var mongoose = require('mongoose');
var FriendSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true}
}, {timestamps: true});
mongoose.model('Friend', FriendSchema);
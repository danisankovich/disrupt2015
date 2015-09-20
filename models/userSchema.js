var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  id: String,
  password: String,
  email: String,
  favoriteClothes:[{ piece_type : String, brand: String, key: String}],
  favoriteClubs: [String],
  access_token: String
});

module.exports = mongoose.model('User', userSchema);


// var mongoose = require('mongoose');
//
// var userSchema = new mongoose.Schema({
//   id: String,
//   password: String,
//   email: String,
//   favoriteClothes:[{ type: String, brand: String, key: String}],
//   favoriteClubs: [String]
// });

module.exports = mongoose.model('User', userSchema);

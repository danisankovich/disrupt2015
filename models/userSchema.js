var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  id: String,
  password: String,
  email: String,
  favoriteClothes:[{key: String}],
  favoriteClubs: []
});

module.exports = mongoose.model('User', userSchema);

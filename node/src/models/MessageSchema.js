const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  text: String,
  url_user_image: String,
  time: Date,
  user: String,
});

module.exports = mongoose.model('Message', MessageSchema);
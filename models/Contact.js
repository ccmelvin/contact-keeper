const mongoose = require('mongoose');
const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    re: 'users'
  },
    name: {
    type: String,
    required: true
  },
    email: {
    type: String,
    unique: true
  },
    phone: {
    type: String,
  },
    type: {
    type: String,
    default: 'personal'
  }
  //   date: {
  //   type:Date,
  //   required: Date.now
  // }
});

module.exports = mongoose.model('contact', ContactSchema);

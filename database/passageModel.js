var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passageSchema = {
  id: {
    type: Number, 
    unique: true
  },
  text: String
};

module.exports = mongoose.model('Passage',passageSchema);
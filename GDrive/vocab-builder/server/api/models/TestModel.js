const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
  score: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  testDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Test', TestSchema);
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completionDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
  }
});

module.exports = mongoose.model('Todo', TodoSchema);

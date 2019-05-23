const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A goal name is required'],
    minlength: 4
  },
  description: {
    type: String,
    default: []
  },
  owner: {
    type: Schema.Types.ObjectId
  },
  partner: {
    type: String,
  },
  dueDate: {
    type: Date,
  },
});

const Goal = mongoose.model('Goal', GoalSchema);

module.exports = Goal;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 4
  },
  description: {
    type: String,
    default: ''
  },
  // owner: Schema.Types.ObjectId,
  //  {
  //   type: 
  // },
  partner: {
    type: String,
  },
  date: {
    type: Date,
  },
  commentId: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
});

const Goal = mongoose.model('Goal', GoalSchema);

module.exports = Goal;
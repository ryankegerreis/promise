const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema({
  poster: { type: String },
  comment: {
    type: String,
    default: ''
  },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  date: {
    type: Date,
  },
  goalId: { type: Schema.Types.ObjectId, ref: "Goal" },
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
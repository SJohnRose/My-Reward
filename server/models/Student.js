const { Schema, model } = require('mongoose');
const Reward = require('./Reward');

const studentSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    studentCode: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    reward: [Reward]
  }
);

const Student = model('Student', studentSchema);

module.exports = Student;

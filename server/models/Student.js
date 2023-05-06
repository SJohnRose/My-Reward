const { Schema, model } = require('mongoose');

const studentSchema = new Schema(
  {
    studentCode: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    reward: {
      type: [Reward],
      required: true
    },
  }
);

const Student = model('Student', studentSchema);

module.exports = Student;

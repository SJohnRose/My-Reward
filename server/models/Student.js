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
    studentName : {
      type: String,
      required: true,
      trim: true
    },
    class: {
      type: String,
      required: true
    }
    
  }
);

const Student = model('Student', studentSchema);

module.exports = Student;

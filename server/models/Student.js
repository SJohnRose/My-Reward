const { Schema, model } = require('mongoose');


const studentSchema = new Schema(
  {
    studentCode: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    studentName : {
      type: String,
      required: true,
      trim: true
    },
    studentClass: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
    
  }
);

const Student = model('Student', studentSchema);

module.exports = Student;

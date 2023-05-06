const { Schema, model } = require('mongoose');

const teacherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    students: {
      type: [Student],
      required: true
    },  
  }
);

const Teacher = model('Teacher', teacherSchema);

module.exports = Teacher;

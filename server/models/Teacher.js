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
    students: [{
      type: Schema.Types.ObjectId,
      ref: 'Student'
    }],  
  }
);

const Teacher = model('Teacher', teacherSchema);

module.exports = Teacher;

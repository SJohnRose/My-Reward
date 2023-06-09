const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Reward = require('./Reward');
const Student = require('./Student');


const teacherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
       
  }
);

// set up pre-save middleware to create password
teacherSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
teacherSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Teacher = model('Teacher', teacherSchema);

module.exports = Teacher;

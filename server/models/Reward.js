const { Schema, model } = require('mongoose');
const Prize = require('./Prize');

const rewardSchema = new Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    studentId: {
      type: Schema.Types.ObjectId,
      ref: 'Student'
    },
    teacherId: {
      type: Schema.Types.ObjectId,
      ref: 'Teacher'
    },
    prize : Prize.schema
    
  }
);

const Reward = model('Reward', rewardSchema);
module.exports = Reward;
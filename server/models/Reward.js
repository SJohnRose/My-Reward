const { Schema, model } = require('mongoose');
const Prize = require('./Prize');

const rewardSchema = new Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student'
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: 'Teacher'
    },
    prize : {
      type: Schema.Types.ObjectId,
      ref: 'Prize'
    }
    
  }
);

const Reward = model('Reward', rewardSchema);
module.exports = Reward;
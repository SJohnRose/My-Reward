const { Schema, model } = require('mongoose');

const rewardSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true
    },
    
  }
);

const Reward = model('Reward', rewardSchema);

module.exports = Reward;
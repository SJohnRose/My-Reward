const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const prizeSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    points : {
      type: Number,
      required: true
    }
}
);

const Prize = mongoose.model('Prize', prizeSchema);
module.exports = Prize;
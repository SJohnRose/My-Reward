const { Schema, model } = require('mongoose');

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


module.exports = prizeSchema;
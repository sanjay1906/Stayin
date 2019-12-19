const mongoose = require('mongoose');
const { SchemaOptions } = require('Models');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
      require: true
    },
    address: {
      type: mongoose.Schema.Types.String,
      require: true
    },
    mobile: {
      type: mongoose.Schema.Types.Number,
      require: true
    },
    username: {
      type: mongoose.Schema.Types.String,
      require: true,
      unique: true
    },
    password: {
      type: mongoose.Schema.Types.String,
      require: true
    }
  },
  SchemaOptions
);

userSchema.index({ username: 1, sparse: true }, { background: true });

module.exports = mongoose.model('Manager', userSchema);

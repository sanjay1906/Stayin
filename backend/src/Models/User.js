const mongoose = require('mongoose');
const { SchemaOptions } = require('Models');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: {
      type: mongoose.Schema.Types.String,
      require: true
    },
    lastname: {
      type: mongoose.Schema.Types.String,
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

module.exports = mongoose.model('User', userSchema);

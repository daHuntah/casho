const { Schema, model } = require("mongoose");
var db = require('./db');

var UserSchema = new db.mongoose.Schema(
  {
    username: { type: String, required: false },
    password: { type: String, required: false },
    address: { type: String, required: false },
    phonenumber: { type: String, required: false },
    registrationDate: { type: Date, required: false },
    lastLoginDate: { type: Date, required: false }
  },
  {
    collection: 'User'
  }
);

let UserModel = db.mongoose.model('User', UserSchema);

module.exports = {UserModel};

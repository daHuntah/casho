const { Schema, model } = require("mongoose");
var db = require('./db');
var UserModel = require('./users.model');

var CatSchema = new db.mongoose.Schema(
  {
    name: { type: String, required: false },
    breed: { type: String, required: false },
    age: { type: Number, required: false },
    description: { type: String, required: false },
    price: { type: Number, required: false },
    postingDate: { type: Date, required: false },
    userId: { type: Schema.Types.ObjectId, ref: UserModel }
  },
  {
    collection: 'Cat'
  }
);

var CatModel = db.mongoose.model('Cat', CatSchema);

module.exports = CatModel;

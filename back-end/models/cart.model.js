const { Schema, model } = require("mongoose");
var db = require('./db');
var UserModel = require('./user.model'); // Import UserModel
var CatModel = require('./cat.model'); // Import CatModel

var CartItemSchema = new db.mongoose.Schema(
  {
    catId: { type: Schema.Types.ObjectId, ref: CatModel }, // Gọi tới CatModel
    quantity: { type: Number, required: false }
  },
  {
    collection: 'CartItem'
  }
);

var CartSchema = new db.mongoose.Schema(
  {
    creationDate: { type: Date, required: false },
    userId: { type: Schema.Types.ObjectId, ref: UserModel }, // Gọi tới UserModel
    cartItems: [CartItemSchema]
  },
  {
    collection: 'Cart'
  }
);

var CartModel = db.mongoose.model('Cart', CartSchema);

module.exports = CartModel;

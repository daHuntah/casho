const { Schema, model } = require("mongoose");
var db = require('./db');
var UserModel = require('./user.model'); // Import UserModel
var CatModel = require('./cat.model'); // Import CatModel

var OrderItemSchema = new db.mongoose.Schema(
  {
    catId: { type: Schema.Types.ObjectId, ref: CatModel }, // Gọi tới CatModel
    quantity: { type: Number, required: false }
  },
  {
    collection: 'OrderItem'
  }
);

var OrderSchema = new db.mongoose.Schema(
  {
    orderDate: { type: Date, required: false },
    status: { type: String, required: false },
    totalValue: { type: Number, required: false },
    userId: { type: Schema.Types.ObjectId, ref: UserModel }, // Gọi tới UserModel
    orderItems: [OrderItemSchema]
  },
  {
    collection: 'Order'
  }
);

var OrderModel = db.mongoose.model('Order', OrderSchema);

module.exports = OrderModel;

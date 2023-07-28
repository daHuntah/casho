const { Schema, model } = require("mongoose");
var db = require('./db');
var UserModel = require('./user.model');
var OrderModel = require('./other.model'); 

var PurchaseHistorySchema = new db.mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: UserModel },
    orderId: { type: Schema.Types.ObjectId, ref: OrderModel },
    purchaseDate: { type: Date, required: false }
  },
  {
    collection: 'PurchaseHistory'
  }
);

var PurchaseHistoryModel = db.mongoose.model('PurchaseHistory', PurchaseHistorySchema);

module.exports = PurchaseHistoryModel;

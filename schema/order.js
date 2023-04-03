const db = require('../config/connection');

const Schema = db.Schema;

const orderScheme = new Schema({
    orderId: Number,
    custid: Number,
    prodId: Number,
    numPurchased: Number
});

const Order = new db.model('order', orderScheme);

module.exports = {
    Order
}

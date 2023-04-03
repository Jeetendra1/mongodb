const db = require('../config/connection');

const Schema = db.Schema;

const inventoryScheme = new Schema({
    prodId: Number,
    price: Number,
    quantity: Number

});

const Inventory = new db.model('inventory', inventoryScheme);

module.exports = {
    Inventory
}

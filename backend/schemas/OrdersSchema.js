const {Schema}= require ('mongoose');
const OrdersSchema=new Schema({
     name: String,
    price: Number,
    qty: Number,
    model: String,
});
module.exports={OrdersSchema};
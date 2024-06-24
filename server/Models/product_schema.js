const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
  title: { type: String },
  picture: { type: String },
  description: { type: String },
  price: { type: String },
  quantity: { type: String },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  status: { type: String },
});
module.exports = mongoose.model("product", productSchema);

const mongoose = require("mongoose");
const donutSchema = mongoose.Schema({
  cakeFlavor: String,
  iceFlavor: String,
  sprinkleAmount: Number,
});
module.exports = mongoose.model("donut", donutSchema);

const mongoose = require("mongoose");

const PartnerSchema = new mongoose.Schema({
  
  imageUrl1: String,
  imageUrl2: String,
  imageUrl3: String,
  imageUrl4: String,
  imageUrl5: String,
  imageUrl6: String,
 
});

const Partner = mongoose.model("Partner", PartnerSchema);

module.exports = Partner;

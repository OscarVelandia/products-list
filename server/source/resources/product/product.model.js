const { Schema, model } = require("mongoose");

const productAvailabilitySchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    enabled: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model("ProductAvailability", productAvailabilitySchema);

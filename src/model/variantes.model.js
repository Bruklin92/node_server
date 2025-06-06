const mongoose = require("mongoose");

const { Schema } = mongoose;

const attributeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  }
});

const varientsSchema = new Schema(
  {
    pid: {
      type: mongoose.Types.ObjectId,
      ref: "products",
      required: true,
    },
    attributes: [attributeSchema],
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("varients", varientsSchema);

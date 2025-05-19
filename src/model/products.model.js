const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsSchema = new Schema(
    {
        categories_id: {
            type: mongoose.Types.ObjectId,
            ref: "categories",
            required: true
        },
        subcategories_id: {
            type: mongoose.Types.ObjectId,
            ref: "subcategories",
            required: true
        },
        name: {
            type: String,
            trim: true,
            required: true,
            unique: true
        }, 
        description: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        pro_img: {
            type: String
        },        
      isActive: {
            type: Boolean,
            default: true
        }
    },
    {
      timestamps: true,
      versionKey: false
    }
)

module.exports = mongoose.model("products", productsSchema);
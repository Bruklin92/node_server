const mongoose = require("mongoose");
const { Schema } = mongoose;

const subCategoriesSchema = new Schema(
    {
        categories_id: {
            type: mongoose.Types.ObjectId,
            ref: "categories",
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
            unique: true
        },
        sub_img: {
            type: String,
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
);

module.exports = mongoose.model("subcategories", subCategoriesSchema);	

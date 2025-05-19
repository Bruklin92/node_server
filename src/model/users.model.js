const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema (
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        mo_number: {
            type: Number,
            required: true,
            trim: true,
            unique: true,
            parseInt: true,
        },
        adress: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        role: {
            type: String,
            required: true,
            trim: true,
            unique: true
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

module.exports = mongoose.model("uses", usersSchema);
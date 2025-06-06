
const { SubCategory } = require("../model");
const mongoose = require("mongoose");
const addsubCategories = async (req, res) => {
    console.log("add subCategories", req.body);
    try {
        const subCategories = await SubCategory.create(req.body)
        if (!subCategories) {
            return res.status(500).json({
                success: false,
                data: null,
                message: "database not created"
            })
        }

        return res.status(201).json({
            success: true,
            data: subCategories,
            message: "database created"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: null,
            message: "internal server erroe" + error.message
        })
    }
}

const listsubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find();
        if (!subCategories) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: subCategories,
            message: "database fetched."
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: null,
            message: "internal server erroe." + error.message
        })
    }
}

const getsubCategories = async (req, res) => {

    try {
        const { id } = req.params;

        const subCategories = await SubCategory.findById(id);
        if (!subCategories) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: subCategories,
            message: "database fetched."
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: null,
            message: "internal server erroe." + error.message
        })
    }
}

const updatesubCategories = async (req, res) => {
    try {
        const { id } = req.params;

        const subCategories = await SubCategory.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!subCategories) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not updated."
            })
        }

        return res.status(201).json({
            success: true,
            data: subCategories,
            message: "database updated."
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: null,
            message: "internal server erroe." + error.message
        })
    }
}

const deletesubCategories = async (req, res) => {
    try {
        const { id } = req.params;

        const subCategories = await SubCategory.findByIdAndDelete(id);
        if (!subCategories) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: subCategories,
            message: "database deleted."
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: null,
            message: "internal server erroe." + error.message
        })
    }
}

const ActivesubCategories = async (req, res) => {
    try {
        const { id } = req.params;

        const subCategories = await SubCategory.aggregate([
            {
                $match: {
                    isActive: true
                }
            },
            {
                $count: 'noofActiveusers'
            }
        ]);
        if (!subCategories) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: subCategories,
            message: "database deleted."
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: null,
            message: "internal server erroe." + error.message
        })
    }
}

const parantCategory = async (req, res) => {
    try {
        const { id } = req.params;

        console.log("iddddd", id);


        const subCategories = await SubCategory.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(id)
                }
            },
            {
                $lookup: {
                    from: "categories",
                    localField: "subcategories_id",
                    foreignField: "categories_id",
                    as: "category"
                }
            },
        ]);
        if (!subCategories) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: subCategories,
            message: "database deleted."
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: null,
            message: "internal server erroe." + error.message
        })
    }
}

module.exports = {
    addsubCategories,
    listsubCategories,
    getsubCategories,
    updatesubCategories,
    deletesubCategories,
    parantCategory,
    ActivesubCategories
}   
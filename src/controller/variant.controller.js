const { Variant } = require("../model");

const addvariant = async (req, res) => {
    console.log("add variant", req.body);
    try {
        const variant = await Variant.create(req.body)
        if (!variant) {
            return res.status(500).json({
                success: false,
                data: null,
                message: "database not created"
            })
        }

        return res.status(201).json({
            success: true,
            data: variant,
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

const listvariant = async (req, res) => {
    try {
        const variant = await Variant.find();
        if (!variant) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: variant,
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

const getvariant = async (req, res) => {

    try {
        const { id } = req.params;

        const variant = await Variant.findById(id);
        if (!variant) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: variant,
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

const updatevariant = async (req, res) => {
    try {
        const { id } = req.params;

        const variant = await Variant.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!variant) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not updated."
            })
        }

        return res.status(201).json({
            success: true,
            data: variant,
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

const deletevariant = async (req, res) => {
    try {
        const { id } = req.params;

        const variant = await Variant.findByIdAndDelete(id);
        if (!variant) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: variant,
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

const countVariant = async (req, res) => {
    try {
        const { id } = req.params;

        const variant = await Variant.aggregate([
            {
                $group: {
                    _id: "$pid",
                    count: {
                        $sum: 1
                    }
                }
            }
        ]);
        if (!variant) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: variant,
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

const listvariantsProduct = async (req, res) => {
    try {
        const { id } = req.params;

        console.log("iddddd", id);


        const variant = await Variant.aggregate([
            {
                $lookup: {
                    from: "products",
                    localField: "pid",
                    foreignField: "_id",
                    as: "product"
                }
            },
            {
                $unwind: "$product"
            }
        ]);
        if (!variant) {
            return res.status(500).json({
                success: false,
                data: null,
                message: "database not created"
            })
        }

        return res.status(201).json({
            success: true,
            data: variant,
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
module.exports = {
    addvariant,
    listvariant,
    getvariant,
    updatevariant,
    deletevariant,
    countVariant,
    listvariantsProduct
}
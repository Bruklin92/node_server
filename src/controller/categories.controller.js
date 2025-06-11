const { Category } = require("../model");

const addCategories = async (req, res) => {
    console.log("add Category", req.body);
    try {
        const category = await Category.create(req.body)
        if (!category) {
            return res.status(500).json({
                success: false,
                data: null,
                message: "database not created"
            })
        }

        return res.status(201).json({
            success: true,
            data: category,
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

const listCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        if (!categories) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: categories,
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

const getCategory = async (req, res) => {

    try {
        const { id } = req.params;

        const category = await Category.findById(id);
        if (!category) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: category,
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

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Category.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!category) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not updated."
            })
        }

        return res.status(201).json({
            success: true,
            data: category,
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

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Category.findByIdAndDelete(id);
        if (!category) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: category,
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

const ActiveCategory = async (req, res) => {
    try {
        const category = await Category.aggregate([
            {
                $match: {
                    isActive: true
                }
            },
            {
                $count: 'NoOfActiveusers'
            }
        ]);

        console.log("ActiveCategories", category);


        if (!category) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: category,
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

const totalProduct = async (req, res) => {
    try {
        const category = await Category.aggregate([
            {
                $group: {
                    _id: "$_id",
                    totalProduct: {
                        $sum: 1
                    }
                }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "_id",
                    foreignField: "categories_id",
                    as: "category"
                }
            },
            {
                $unwind: "$category"
            }
        ]);

        console.log("ActiveCategories", category);


        if (!category) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: category,
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

const InActiveCategory = async (req, res) => {
    try {
        const category = await Category.aggregate([
            {
                $match: {
                    isActive: false
                }
            },
            {
                $count: 'NoOfActiveusers'
            }
        ]);

        console.log("ActiveCategories", category);


        if (!category) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: category,
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

const countSubCat = async (req, res) => {
    try {
        const category = await Category.aggregate(
            [
                {
                    $lookup: {
                        from: "subcategories",
                        localField: "_id",
                        foreignField: "categories_id",
                        as: "subcategories",
                    },
                },
                {
                    $addFields: {
                        subCategory: { $size: "$subcategories" }
                    }
                },
                {
                    $unwind: "$subcategories"
                }
            ]);

        console.log("ActiveCategories", category);


        if (!category) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: category,
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

const speCategory = async (req, res) => {
    try {
        const { id } = req.params;

        console.log("iddddd", id);


        const subCategories = await Category.aggregate([
            {
                $group: {
                    _id: "$_id",
                    subCategory: {
                        $sum: 1
                    }
                }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "_id",
                    foreignField: "categories_id",
                    as: "product"
                }
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

const productCount = async (req, res) => {
    try {
        const category = await Category.aggregate(
            [
                {
                    $lookup: {
                        from: "subcategories",
                        localField: "_id",
                        foreignField: "categories_id",
                        as: "subcategories",  
                        pipeline: [
                            {
                                $lookup: {
                                    from: "products",
                                    localField: "_id",
                                    foreignField: "_id",
                                    as: "product"
                                }
                            },
                            {
                                $addFields: {
                                    products: { $size: "$product" }
                                }
                            }
                        ]
                    }
                },
                {
                    $unwind: "$subcategories"
                }
            ]);

        console.log("ActiveCategories", category);


        if (!category) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: category,
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
    addCategories,
    listCategories,
    getCategory,
    updateCategory,
    deleteCategory,
    ActiveCategory,
    totalProduct,
    InActiveCategory,
    countSubCat,
    speCategory,
    productCount
}
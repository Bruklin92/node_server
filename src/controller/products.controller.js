const { Product } = require("../model");

const addproducts = async (req, res) => {
    console.log("add products", req.body);
    try {
        const products = await Product.create(req.body)
        if (!products) {
            return res.status(500).json({
                success: false,
                data: null,
                message: "database not created"
            })
        }

        return res.status(201).json({
            success: true,
            data: products,
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

const listproducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (!products) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: products,
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

const getproducts = async (req, res) => {

    try {
        const { id } = req.params;

        const products = await Product.findById(id);
        if (!products) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: products,
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

const updateproducts = async (req, res) => {
    try {
        const { id } = req.params;

        const products = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!products) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not updated."
            })
        }

        return res.status(201).json({
            success: true,
            data: products,
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

const deleteproducts = async (req, res) => {
    try {
        const { id } = req.params;

        const products = await Product.findByIdAndDelete(id);
        if (!products) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: products,
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

const NoVariant = async (req, res) => {
    console.log("add products", req.body);
    try {
        const products = await Product.aggregate([
            {
                $lookup: {
                    from: "varients",
                    localField: "_id",
                    foreignField: "pid",
                    as: "variants"
                }
            },
            {
                $match: {
                    variants: { $eq: [] }
                }
            }
        ])
        if (!products) {
            return res.status(500).json({
                success: false,
                data: null,
                message: "database not created"
            })
        }

        return res.status(201).json({
            success: true,
            data: products,
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

const ListReviwe = async (req, res) => {
    try {
        const products = await Product.aggregate([
            {
                $lookup: {
                    from: "reviews",
                    localField: "_id",
                    foreignField: "pid",
                    as: "reviews"
                }
            },
            {
                $unwind: "$reviews"
            }
        ])
        if (!products) {
            return res.status(500).json({
                success: false,
                data: null,
                message: "database not created"
            })
        }

        return res.status(201).json({
            success: true,
            data: products,
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

const NameSearch = async (req, res) => {
    try {
        console.log(req.query.name);

        const products = await Product.aggregate([
            {
                $match: {
                    name: { $regex: `^${req.query.name}[a-zA-Z0-9 ]*` }
                }
            }
        ])
        if (!products) {
            return res.status(500).json({
                success: false,
                data: null,
                message: "database not created"
            })
        }

        return res.status(201).json({
            success: true,
            data: products,
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

const CategoryProduct = async (req, res) => {
    try {
        const { id } = req.params;

        console.log("iddddd", id);


        const product = await Product.aggregate([
            {
                $group: {
                    _id: "$categories_id",
                    product: {
                        $sum: 1
                    }
                }
            },
            {
                $lookup: {
                    from: "categories",
                    localField: "_id",
                    foreignField: "_id",
                    as: "category"
                }
            }
        ]);
        if (!product) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: product,
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

const SubCategoryProduct = async (req, res) => {
    try {
        const { id } = req.params;

        console.log("iddddd", id);


        const product = await Product.aggregate([
            {
                $group: {
                    _id: "$subcategories_id",
                    product: {
                        $sum: 1
                    }
                }
            },
            {
                $lookup: {
                    from: "subcategories",
                    localField: "_id",
                    foreignField: "_id",
                    as: "subcategories"
                }
            }
        ]);
        if (!product) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: product,
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

// const productvarient = async (req, res) => {    
//     try {
//         const { id } = req.params;

//         console.log("iddddd", id);


//         const product = await Product.aggregate([
//             {
//                 $group: {
//                     _id: "$_id",
//                     product: {
//                         $sum: 1
//                     }
//                 }
//             },
//             {
//                 $lookup: {
//                     from: "varients",
//                     localField: "_id",
//                     foreignField: "pid",
//                     as: "variant"
//                 }
//             }
//         ]);
//         if (!product) {
//             return res.status(500).json({
//                 success: false,
//                 data: [],
//                 message: "database not deleted."
//             })
//         }

//         return res.status(201).json({
//             success: true,
//             data: product,
//             message: "database deleted."
//         })
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             data: null,
//             message: "internal server erroe." + error.message
//         })
//     }
// }


const rattingProducts = async (req, res) => {
    try {
        const products = await Product.aggregate([
            {
                $group: {
                    _id: "$_id",
                    product: {
                        $sum: 1
                    }
                }
            },
            {
                $lookup: {
                    from: "reviews",
                    localField: "_id",
                    foreignField: "pid",
                    as: "ratting"
                }
            },
            {
                $unwind: "$ratting"
            },
            {
                $project: {
                    "ratting.rating": 1
                }
            },
            {
                $sort: {
                    ratting: -1
                }
            }
        ]);
        if (!products) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: products,
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

const outofStock = async (req, res) => {
    try {
        const products = await Product.aggregate([
            {
                $group: {
                    _id: "$_id",
                    product: {
                        $sum: 1
                    }
                }
            },
            {
                $lookup: {
                    from: "varients",
                    localField: "_id",
                    foreignField: "pid",
                    as: "varient"
                }
            },
            {
                $match: {
                    varient: { $eq: [] }
                }
            }
        ]);
        if (!products) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: products,
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

const CountCategory = async (req, res) => {
    try {
        const products = await Product.aggregate([

            {
                $lookup: {
                    from: "categories",
                    localField: "categories_id",
                    foreignField: "_id",
                    as: "categories"
                }
            },
            {
                $group: {
                    _id: "$categories_id",
                    product: {
                        $sum: 1
                    }
                }
            },
        ]);
        if (!products) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: products,
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

const CountReview = async (req, res) => {
    try {
        const products = await Product.aggregate([
            {
                $lookup: {
                    from: "reviews",
                    localField: "_id",
                    foreignField: "pid",
                    as: "Review"
                }
            },
            {
                $match: {
                    Review: { $eq: [] }
                }
            }
        ]);
        if (!products) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: products,
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

const ReviewGte = async (req, res) => {
    try {
        const products = await Product.aggregate([
            {
                $lookup: {
                    from: "reviews",
                    localField: "_id",
                    foreignField: "pid",
                    as: "Review"
                }
            },
            {
                $match: {
                    "Review.rating": { $gte: 4 }
                }
            }
        ]);
        if (!products) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: products,
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
    addproducts,
    listproducts,
    getproducts,
    updateproducts,
    deleteproducts,
    NoVariant,
    ListReviwe,
    NameSearch,
    CategoryProduct,
    SubCategoryProduct,
    // productvarient,
    rattingProducts,
    outofStock,
    CountCategory,
    CountReview,
    ReviewGte
}
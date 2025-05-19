const { Categories } = require("../model")

const addCategories = async (req, res) => {
 console.log("add Category", req.body);
    try {
        const category = await Categories.create(req.body)
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

module.exports = {
    addCategories
}
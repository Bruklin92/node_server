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
module.exports = {
    addproducts,
    listproducts,
    getproducts,
    updateproducts,
    deleteproducts
}
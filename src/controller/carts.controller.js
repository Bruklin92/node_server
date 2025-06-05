const { Carts } = require("../model")

const addCarts = async (req, res) => {
    console.log("add cart", req.body);
    try {
        const carts = await Carts.create(req.body)
        if (!carts) {
            return res.status(500).json({
                success: false,
                data: null,
                message: "database not created"
            })
        }

        return res.status(201).json({
            success: true,
            data: carts,
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

const listCarts = async (req, res) => {
    try {
        const Carts = await Carts.find();
        if (!Carts) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: Carts,
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

const getcarts = async (req, res) => {

    try {
        const { id } = req.params;

        const carts = await Carts.findById(id);
        if (!carts) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: carts,
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

const updatecarts = async (req, res) => {
    try {
        const { id } = req.params;

        const carts = await Carts.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!carts) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not updated."
            })
        }

        return res.status(201).json({
            success: true,
            data: carts,
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

const deletecarts = async (req, res) => {
    try {
        const { id } = req.params;

        const carts = await Carts.findByIdAndDelete(id);
        if (!carts) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: carts,
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
    addCarts,
    listCarts,
    getcarts,
    updatecarts,
    deletecarts
}
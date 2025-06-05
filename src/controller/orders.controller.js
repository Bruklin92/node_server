const { orders } = require("../model")

const addorders = async (req, res) => {
    console.log("add orders", req.body);
    try {
        const orders = await orders.create(req.body)
        if (!orders) {
            return res.status(500).json({
                success: false,
                data: null,
                message: "database not created"
            })
        }

        return res.status(201).json({
            success: true,
            data: orders,
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

const listorders = async (req, res) => {
    try {
        const orders = await orders.find();
        if (!orders) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: orders,
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

const getorders = async (req, res) => {

    try {
        const { id } = req.params;

        const orders = await orders.findById(id);
        if (!orders) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: orders,
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

const updateorders = async (req, res) => {
    try {
        const { id } = req.params;

        const orders = await orders.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!orders) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not updated."
            })
        }

        return res.status(201).json({
            success: true,
            data: orders,
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

const deleteorders = async (req, res) => {
    try {
        const { id } = req.params;

        const orders = await orders.findByIdAndDelete(id);
        if (!orders) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: orders,
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
    addorders,
    listorders,
    getorders,
    updateorders,
    deleteorders
}
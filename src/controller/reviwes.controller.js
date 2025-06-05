const { reviwes } = require("../model")

const addreviwes = async (req, res) => {
    console.log("add reviwes", req.body);
    try {
        const reviwes = await reviwes.create(req.body)
        if (!reviwes) {
            return res.status(500).json({
                success: false,
                data: null,
                message: "database not created"
            })
        }

        return res.status(201).json({
            success: true,
            data: reviwes,
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

const listreviwes = async (req, res) => {
    try {
        const reviwes = await reviwes.find();
        if (!reviwes) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: reviwes,
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

const getreviwes = async (req, res) => {

    try {
        const { id } = req.params;

        const reviwes = await reviwes.findById(id);
        if (!reviwes) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: reviwes,
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

const updatereviwes = async (req, res) => {
    try {
        const { id } = req.params;

        const reviwes = await reviwes.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!reviwes) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not updated."
            })
        }

        return res.status(201).json({
            success: true,
            data: reviwes,
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

const deletereviwes = async (req, res) => {
    try {
        const { id } = req.params;

        const reviwes = await reviwes.findByIdAndDelete(id);
        if (!reviwes) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: reviwes,
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
    addreviwes,
    listreviwes,
    getreviwes,
    updatereviwes,
    deletereviwes
}
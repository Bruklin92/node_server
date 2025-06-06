const { Offer } = require("../model");

const addOfferes = async (req, res) => {
    console.log("add offeres", req.body);
    try {
        const offeres = await Offer.create(req.body)
        if (!offeres) {
            return res.status(500).json({
                success: false,
                data: null,
                message: "database not created"
            })
        }

        return res.status(201).json({
            success: true,
            data: offeres,
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

const listOfferes = async (req, res) => {
    try {
        const Offeres = await Offer.find();
        if (!Offeres) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: Offeres,
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

const getofferes = async (req, res) => {

    try {
        const { id } = req.params;

        const offeres = await Offer.findById(id);
        if (!offeres) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: offeres,
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

const updateofferes = async (req, res) => {
    try {
        const { id } = req.params;

        const offeres = await Offer.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!offeres) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not updated."
            })
        }

        return res.status(201).json({
            success: true,
            data: offeres,
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

const deleteofferes = async (req, res) => {
    try {
        const { id } = req.params;

        const offeres = await Offer.findByIdAndDelete(id);
        if (!offeres) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: offeres,
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
    addOfferes,
    listOfferes,
    getofferes,
    updateofferes,
    deleteofferes
}
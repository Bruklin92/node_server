const { Payment } = require("../model");

const addpayments = async (req, res) => {
    console.log("add payments", req.body);
    try {
        const payments = await Payment.create(req.body)
        if (!payments) {
            return res.status(500).json({
                success: false,
                data: null,
                message: "database not created"
            })
        }

        return res.status(201).json({
            success: true,
            data: payments,
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

const listpayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        if (!payments) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: payments,
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

const getpayments = async (req, res) => {

    try {
        const { id } = req.params;

        const payments = await Payment.findById(id);
        if (!payments) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: payments,
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

const updatepayments = async (req, res) => {
    try {
        const { id } = req.params;

        const payments = await Payment.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!payments) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not updated."
            })
        }

        return res.status(201).json({
            success: true,
            data: payments,
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

const deletepayments = async (req, res) => {
    try {
        const { id } = req.params;

        const payments = await Payment.findByIdAndDelete(id);
        if (!payments) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: payments,
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

const calculateOrder = async (req, res) => {
    try {
        const payments = await Payment.aggregate([
            {
                $group: {
                    _id: "$order_id",
                    order: {
                        $sum: 1
                    },
                    method: { $first: "$method" }
                }
            },
            {
                $lookup: {
                    from: "orders",
                    localField: "_id",
                    foreignField: "_id",
                    as: "order"
                }
            },
            {
                $unwind: "$order"
            },
            {
                $project: {
                    "order.item.qty": 1,
                    "order.total_amt": 1,
                    "order.status": 1
                }
            }
        ]);
        if (!payments) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: payments,
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
    addpayments,
    listpayments,
    getpayments,
    updatepayments,
    deletepayments,
    calculateOrder
}
const { User } = require("../model");

const adduser = async (req, res) => {
    console.log("add user", req.body);
    try {
        const user = await User.create(req.body)
        if (!user) {
            return res.status(500).json({
                success: false,
                data: null,
                message: "database not created"
            })
        }

        return res.status(201).json({
            success: true,
            data: user,
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

const listuser = async (req, res) => {
    try {
        const user = await User.find();
        if (!user) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: user,
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

const getuser = async (req, res) => {

    try {
        const { id } = req.params;

        const user = await User.findById(id);
        if (!user) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not fetched."
            })
        }

        return res.status(201).json({
            success: true,
            data: user,
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

const updateuser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not updated."
            })
        }

        return res.status(201).json({
            success: true,
            data: user,
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

const deleteuser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: user,
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

const SearchUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.aggregate([
            {
                $match: {
                    name: /^[ a-zA-Z]+/,
                    email:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    adress: /^[ a-zA-Z]+/,
                    mo_number:
                        /^(([1-9]*)|(([1-9]*).([0-9]*)))$/
                }
            },
            {
                $match: {
                    $and: [
                        {
                            name: { $regex: "$name" },
                            email: { $regex: "$email" },
                            adress: { $regex: "$adress" },
                            mo_number: { $regex: "$mo_number" }
                        }
                    ]
                }
            }
        ]);
        if (!user) {
            return res.status(500).json({
                success: false,
                data: [],
                message: "database not deleted."
            })
        }

        return res.status(201).json({
            success: true,
            data: user,
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
    adduser,
    listuser,
    getuser,
    updateuser,
    deleteuser,
    SearchUser
}
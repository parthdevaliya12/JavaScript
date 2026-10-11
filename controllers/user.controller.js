import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import userModel from "../models/user.model.js"

export const register = async (req, res) => {
    try {
        const { username, email, password, confirmPassword, address, dob, gender, phoneNo } = req.body

        let user = await userModel.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exist", success: false })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password must be same", success: false })

        }

        let passHash = await bcrypt.hash(password, 10)

        let passConHash = await bcrypt.hash(confirmPassword, 10)

        const avatar = req.file ? req.file.filename : "";

        let newUser = await userModel.create({
            username,
            email,
            password: passHash,
            confirmPassword: passConHash,
            avatar,
            address,
            dob,
            gender,
            phoneNo
        })

        await newUser.save()

        return res.status(201).json({ message: "User registered", success: true, newUser })


    } catch (error) {
        return res.status(500).json({ message: "Internal server error", success: false })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        let user = await userModel.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "User not found", success: false })
        }


        let match = await bcrypt.compare(password, user.password)

        if (!match) {
            return res.status(400).json({ message: "Invalid credentials", success: false })

        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" })


        return res.status(201).json({ message: "Login success", success: true, token })


    } catch (error) {
        return res.status(500).json({ message: "Internal server error", success: false })
    }
}


export const getAllUser = async (req, res) => {
    try {
        const user = await userModel.find().select("-password").select("-confirmPassword")
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false })
        }

        return res.status(200).json({ message: "User retrieve", success: true, user })


    } catch (error) {
        return res.status(500).json({ message: "Internal server error", success: false })
    }
}

export const getSingleUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findById(id)
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false })
        }

        return res.status(200).json({ message: "User retrieve", success: true, user })


    } catch (error) {
        return res.status(500).json({ message: "Internal server error", success: false })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findByIdAndDelete(id)
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false })
        }

        return res.status(200).json({ message: "User deleted", success: true, user })


    } catch (error) {
        return res.status(500).json({ message: "Internal server error", success: false })
    }
}


export const editUser = async (req, res) => {
    try {
        const { id } = req.params
        const { username, email, address, dob, gender, phoneNo } = req.body;
        const user = await userModel.findByIdAndUpdate(
            id,
            {
                username,
                email,
                address,
                dob,
                gender,
                phoneNo
            },
            {
                new: true,
                runValidators: true
            }
        ).select("-password -confirmPassword");
        
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false })
        }

        return res.status(200).json({ message: "User edited", success: true, user })


    } catch (error) {
        return res.status(500).json({ message: "Internal server error", success: false })
    }
}


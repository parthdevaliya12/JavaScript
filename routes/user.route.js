import express from "express"
import { deleteUser, getAllUser, editUser, getSingleUser, login, register } from "../controllers/user.controller.js"
import upload from "../utils/imageStore.js"
import { auth } from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post('/register', upload.single("avatar"), register)
router.post('/login', login)
router.get('/alluser', auth, getAllUser)
router.get('/user/:id', auth, getSingleUser)
router.delete('/delete/:id', auth, deleteUser)
router.put('/edit/:id', auth, editUser)

export default router
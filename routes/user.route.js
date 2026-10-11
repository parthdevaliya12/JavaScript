import express from "express"
import { login, register } from "../controllers/user.controller.js"
import upload from "../utils/imageStore.js"

const router = express.Router()

router.post('/register', upload.single("avatar"), register)
router.post('/login', login)

export default router
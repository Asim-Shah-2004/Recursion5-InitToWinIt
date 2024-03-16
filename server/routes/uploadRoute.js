import express from 'express'
import { handleUpload } from '../controllers/index.js'
import multer from 'multer'
import { storage } from '../config/index.js'

const upload = multer({ storage: storage })

const uploadRouter = express.Router()

uploadRouter.post('/', upload.single('image'), handleUpload)

export default uploadRouter

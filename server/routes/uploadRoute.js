import express from 'express'
const uploadRourter = express.Router()
import handleUpload from '../controllers/handleUpload.js'
import multer from 'multer'
import storage from '../config/multerOptions.js'

const upload = multer({ storage: storage })

uploadRourter.post('/', upload.single('image'), handleUpload)

export default uploadRourter

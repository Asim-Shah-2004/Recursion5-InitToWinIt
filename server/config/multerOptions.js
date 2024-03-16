import multer from 'multer'
import path from 'path'

const DESTINATION_PATH = "images"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DESTINATION_PATH)
    },
    filename: (req, file, cb) => {
        try {
            const extname = path.extname(file.originalname)
            const filename = `${Date.now()}${extname}`
            cb(null, filename)
        } catch (error) {
            cb(error)
        }
    },
})

export default storage

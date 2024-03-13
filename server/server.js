import express from 'express';
import RegisterRouter from './routes/registerRoute.js';
import loginRouter from './routes/loginRoute.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import corsOptions from './config/corsOptions.js';

dotenv.config();

const app = express();
const PORT = 3000;
const CONNECTION_URL = `mongodb+srv://IPL_AUCTION_24:${process.env.PASSWORD}@cluster0.ilknu4v.mongodb.net/HACKATHON`;

// Define multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Initialize multer upload middleware
const upload = multer({ storage: storage });

mongoose
    .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch((err) => console.log(`No connection to MongoDB\nError:\n${err}`));

app.use(express.json());
app.use(cors(corsOptions));
app.use('/register', RegisterRouter);
app.use('/login', loginRouter);

// Route to handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
    res.send('Image uploaded');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

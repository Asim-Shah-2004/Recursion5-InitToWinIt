import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import RegisterRouter from './routes/registerRoute.js';
import loginRouter from './routes/loginRoute.js';
import uploadRouter from './routes/uploadRoute.js';
import corsOptions from './config/corsOptions.js';

dotenv.config();

const app = express();
const PORT = 3000;
const CONNECTION_URL = `mongodb+srv://IPL_AUCTION_24:${process.env.PASSWORD}@cluster0.ilknu4v.mongodb.net/HACKATHON`;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch((err) => console.log(`No connection to MongoDB\nError:\n${err}`));

app.use(express.json());
app.use(cors(corsOptions));

// Registering routes
app.use('/register', RegisterRouter);
app.use('/login', loginRouter);
app.use('/upload', uploadRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

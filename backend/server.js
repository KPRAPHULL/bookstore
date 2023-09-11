import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import dotenv from 'dotenv';

import useRouter from './routes/router.js'

// dotenv.config();
const PORT = 5000

const app = express();
app.use(express.urlencoded({ extended: false })); // not allow nested object when false
app.use(cors());
app.use(bodyParser.json());
app.use('/api', useRouter);

app.listen(PORT, () => { });
// "bcryptjs": "^2.4.3",
//     "cookie-parser": "^1.4.5",
//     "cors": "^2.8.5",
//     "dotenv": "^10.0.0",
//     "express": "^4.17.1",
//     "https": "^1.0.0",
//     "jsonwebtoken": "^8.5.1",
//     "uuid": "^8.3.2"
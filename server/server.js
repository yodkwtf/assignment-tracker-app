import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';
import colors from 'colors';
import errorMiddleware from './middleware/errorMiddleware.js';
import notFoundMiddleware from './middleware/notFoundMiddleware.js';

const app = express();
dotenv.config();
connectDB();

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// MIDDLEWARE
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

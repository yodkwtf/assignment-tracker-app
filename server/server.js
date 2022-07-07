import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';
import errorMiddleware from './middleware/errorMiddleware.js';
import notFoundMiddleware from './middleware/notFoundMiddleware.js';
import userRouter from './routes/userRoutes.js';
import projectRouter from './routes/projectRoutes.js';

const app = express();
dotenv.config();
connectDB();

// Middleware
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/projects', projectRouter);

// MIDDLEWARE
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

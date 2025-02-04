import express from 'express';
import nodemailer from "nodemailer"
import connectDB from './db/db.js'; // Import database connection
import ContactRouters from './routers/ContactRouters.js'
import dotenv from 'dotenv'; // Import dotenv to use environment variables
import cors from 'cors'; // Import CORS

const app = express();
dotenv.config(); // Load environment variables from .env file

const corsOptions = {
  origin: ['http://localhost:5174', 'https://sanjaygawai.vercel.app/'], // Ensure the frontend URL is correct
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow appropriate methods for your API
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers if necessary
  credentials: true, // Allow credentials (cookies, headers)
};

// Apply the CORS middleware with the configured options
app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON request body

// Routes

app.use('/api/email', ContactRouters);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


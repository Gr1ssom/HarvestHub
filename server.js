// Importing necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware to parse JSON and handle CORS
app.use(cors());
app.use(express.json());

// Test Route to verify that the server is running correctly
app.get('/api/test', (req, res) => {
  res.send("Backend is running!");
});

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Set the server to listen on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

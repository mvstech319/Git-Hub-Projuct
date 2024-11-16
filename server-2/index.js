// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Define a simple data schema
const DataSchema = new mongoose.Schema({
  name: { type: String },
  course: { type: String },
});

// Create a model from the schema
const DataModel = mongoose.model('Data', DataSchema);

// Define the POST endpoint
app.post('/api/data', async (req, res) => {
  try {
    const newData = new DataModel(req.body);
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(500).json({ message: 'Error saving data', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Import routes
const ParentRoutes = require('./Routes/ParentRoute.js');


app.use(express.json());

const dbURI = process.env.MONGO_URI; 

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Successfully connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use('/api/parents', ParentRoutes);

const port = process.env.PORT || 5000; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

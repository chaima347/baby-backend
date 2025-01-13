const mongoose = require('mongoose');

// MongoDB connection string (replace <your-db-name> with your database name)
const dbURI = 'mongodb://localhost:27017/dada'; 

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Successfully connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

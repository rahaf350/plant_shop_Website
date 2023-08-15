const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const jsonData = require('./../1st-project/plantProject/db.json'); // Replace with the actual path

// Define API endpoints
app.get('/api/PlantFromData', (req, res) => {
  res.json(jsonData.PlantFromData);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

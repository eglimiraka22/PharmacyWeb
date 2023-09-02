const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'pharmacy_db',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoint to get all products
app.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM products ORDER BY id ASC';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching products: ' + err.stack);
      res.status(500).send('Error fetching products');
      return;
    }

    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

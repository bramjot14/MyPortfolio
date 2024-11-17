const express = require('express');
const cors = require('cors'); 
/* The cors (Cross-Origin Resource Sharing) package is used in your Node.js backend to
 enable your React frontend (running on a different origin) to communicate with the backend server without being blocked by the 
 Same-Origin Policy enforced by web browsers.*/
 const pgp = require('pg-promise')();
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Database connection setup
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'portfolio',
  user: 'postgres',
  password: 'Chauhan@123',
});


// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js backend for React!');
});

app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await db.any('SELECT * FROM contacts'); // Fetch all contacts
    res.status(200).json(contacts); // Send the data as JSON response
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body; // Extract data from the request body
  // These name, email and message are bein taken from const formData = { name, email, message }; which is in contact.js

  try {
    const result = await db.one(
      'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *',
      [name, email, message]
    );
    // If you're inserting a row and need to know the generated id (or any other field created by the database, like created_at), 
    // and thus used RETURNING to fetch it, and db.one ensures exactly one row is returned.

    res.status(201).json({ message: 'Message saved successfully!', data: result });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const verifyToken = require('./middleware/authMiddleware');

const app = express();
const port = 5050;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cgidb'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  db.query('SELECT * FROM users WHERE username = ?', [username], async (error, results) => {
    if (error) {
      console.error('Error querying database:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const user = results[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ username: user.username }, 'childgrowthindicator', { expiresIn: '1h' });
    return res.json({ token });
  });
});

app.post('/signup', (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ error: 'Email, username, and password are required' });
  }

  // Generate a ChildID
  db.query('SELECT MAX(ChildID) AS maxChildID FROM childdetails', (error, results) => {
    if (error) {
      console.error('Error querying database:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }

    let childID = results[0].maxChildID ? results[0].maxChildID + 1 : 1;

    // Insert the new user into the database
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Error hashing password:', err);
        return res.status(500).json({ error: 'Error creating new user' });
      }

      db.query('INSERT INTO users (ChildID, email, username, password) VALUES (?, ?, ?, ?)', [childID, email, username, hashedPassword], (error, results) => {
        if (error) {
          console.error('Error creating new user:', error);
          return res.status(500).json({ error: 'Error creating new user' });
        } else {
          return res.json({ message: 'User created successfully', childID });
        }
      });
    });
  });
});

app.get('/protected-route', verifyToken, (req, res) => {
  const username = req.user.username;
  res.json({ message: `Hello, ${username}! This is a protected route.` });
});

app.get('/heightM', (req, res) => {
  const sql = 'SELECT * FROM heightm';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.get('/heightF', (req, res) => {
  const sql = 'SELECT * FROM heightF';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.get('/weightF', (req, res) => {
  const sql = 'SELECT * FROM weightF';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.get('/weightM', (req, res) => {
  const sql = 'SELECT * FROM weightM';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.get('/ah/:ChildID', (req, res) => {
  const ChildID = req.params.ChildID;
  const sql = 'SELECT Height FROM childmonthlydetails WHERE childID=?';
  db.query(sql, [ChildID], (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.get('/lastWeight/:childId', (req, res) => {
  const childId = req.params.childId;
  const sql = `SELECT weight FROM childmonthlydetails WHERE ChildID = ? ORDER BY DateOfMeasurement DESC LIMIT 1`;
  db.query(sql, [childId], (err, result) => {
    if (err) {
      console.error('Error fetching last weight:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ message: 'No weight record found for the given child ID' });
      return;
    }
    res.json({ weight: result[0].weight });
  });
});

app.get('/lastHeight/:childId', (req, res) => {
  const childId = req.params.childId;
  const sql = `SELECT Height FROM childmonthlydetails WHERE ChildID = ? ORDER BY DateOfMeasurement DESC LIMIT 1`;
  db.query(sql, [childId], (err, result) => {
    if (err) {
      console.error('Error fetching last height:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ message: 'No height record found for the given child ID' });
      return;
    }
    res.json({ height: result[0].Height });
  });
});

app.get('/baby/:ChildID', (req, res) => {
  const ChildID = req.params.ChildID;
  const query = `SELECT * FROM childdetails WHERE ChildID = ?`;

  db.query(query, [ChildID], (error, results) => {
    if (error) {
      console.error('Error fetching baby details:', error);
      res.status(500).json({ error: 'Error fetching baby details' });
    } else {
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).json({ error: 'Baby details not found' });
      }
    }
  });
});

app.get('/id', (req, res) => {
  db.query('SELECT MAX(ChildID) AS maxChildID FROM childdetails', (error, results) => {
    if (error) {
      console.error('Error querying database:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }

    const nextChildID = results[0].maxChildID ? results[0].maxChildID + 1 : 1;
    return res.json({ nextChildID });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

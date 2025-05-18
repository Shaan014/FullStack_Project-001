const express = require('express');
const router = express.Router();
const dbFunctions = require('../db/dbFunctions');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validateLogin } = require('../utils/index');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


// Login route
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validate input
    const { error } = validateLogin(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // 2. Check user exists
    const user = await dbFunctions.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 3. Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 4. Generate JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '30s' });

    // 5. Send response
    res.status(200).json({ message: 'Login successful', token });

  } catch (error) {
    res.status(500).json({ message: 'Error during login', error: error.message });
  }
});

module.exports = router;











// const express = require('express');
// const router = express.Router();
// const dbFunctions = require('../db/dbFunctions');

// // Login route
// router.post('/', async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     // TODO: Implement login logic
//     // 1. Validate input
//     // 2. Check user exists
//     // 3. Verify password
//     // 4. Generate JWT token
//     // 5. Send response
    
//     res.status(501).json({ message: 'Login route not implemented yet' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error during login', error: error.message });
//   }
// });

// module.exports = router; 
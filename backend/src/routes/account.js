const express = require('express');
const router = express.Router();
const dbFunctions = require('../db/dbFunctions');
const { authMiddleware } = require('../utils');

// Get account details
router.get('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch user from DB
    const user = await dbFunctions.getUserById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return user data (excluding password)
    const { password, ...userWithoutPassword } = user;
    res.status(200).json(userWithoutPassword);

  } catch (error) {
    res.status(500).json({ message: 'Error fetching account', error: error.message });
  }
});

module.exports = router;




// const express = require('express');
// const router = express.Router();
// const dbFunctions = require('../db/dbFunctions');

// // Get account details
// router.get('/',authMiddleware, async (req, res) => {
//   try {
//     // TODO: Implement get account logic
//     //get user details from request that was added by authMiddleware
//     //return user details
//     res.status(501).json({ message: 'Get account route not implemented yet' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching account', error: error.message });
//   }
// });


// module.exports = router; 
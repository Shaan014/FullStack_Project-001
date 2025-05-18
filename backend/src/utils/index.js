const jwt = require('jsonwebtoken');
const Joi = require('joi');
require('dotenv').config();

// Middleware to verify JWT token with expiration handling
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization token missing or invalid' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Store decoded user info in request
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired. Please log in again.' });
    } else {
      return res.status(401).json({ message: 'Token is invalid', error: err.message });
    }
  }
};

//  Function to validate login input
const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  });

  return schema.validate(data);
};

module.exports = {
  authMiddleware,
  validateLogin
};



// authMiddleware = (req, res, next) => {
//     // TODO: Implement auth middleware
//     //get token from header
//     //verify token
//     //add user to request
//     next();
// }

// module.exports = {
//     authMiddleware
// }
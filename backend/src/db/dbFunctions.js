const bcrypt = require('bcryptjs');

// Mock user database
const users = [
  {
    id: 1,
    email: 'test@example.com',
    password: '$2b$10$JnSxyCrWz8OGQ/mqahrSVeXqbVdyXwmpMH4xw3Jrvp3KbYOTlFd76', 
    name: 'Test User'
  }
];

// Mock database functions
const dbFunctions = {
  // User authentication
  findUserByEmail: async (email) => {
    return users.find(user => user.email === email);
  },

  validateLogin: async (email, password) => {
    const user = await dbFunctions.findUserByEmail(email);
    if (!user) return null;

    const match = await bcrypt.compare(password, user.password);
    if (!match) return null;

    return { id: user.id, email: user.email, name: user.name };
  },

  createUser: async (userData) => {
    const newUser = {
      id: users.length + 1,
      ...userData
    };
    users.push(newUser);
    return newUser;
  },

  // Account management
  getUserById: async (userId) => {
    return users.find(user => user.id === userId);
  },

  updateUser: async (userId, updateData) => {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) return null;

    users[userIndex] = { ...users[userIndex], ...updateData };
    return users[userIndex];
  },

  deleteUser: async (userId) => {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) return false;

    users.splice(userIndex, 1);
    return true;
  }
};

module.exports = dbFunctions;

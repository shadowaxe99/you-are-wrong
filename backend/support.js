```javascript
const express = require('express');
const router = express.Router();

// Mock user data
const userData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        queries: []
    },
    // More users...
];

// Provide support by handling user queries
router.post('/support', (req, res) => {
    const { userId, query } = req.body;

    // Find the user
    const user = userData.find(user => user.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Add the query to the user's queries
    user.queries.push(query);

    // Send a response
    res.json({ message: 'Your query has been received. We will get back to you soon.' });
});

// Function to provide support
function provideSupport(userId, query) {
    // Find the user
    const user = userData.find(user => user.id === userId);
    if (!user) {
        console.log('User not found');
        return;
    }

    // Add the query to the user's queries
    user.queries.push(query);

    console.log('Your query has been received. We will get back to you soon.');
}

module.exports = {
    router,
    provideSupport
};
```
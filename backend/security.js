```javascript
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./database.js').UserSchema;

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

function authenticateUser(username, password) {
    return User.findOne({ username })
        .then(user => {
            if (!user) {
                throw new Error('User not found');
            }

            return bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) {
                        throw new Error('Invalid password');
                    }

                    const payload = {
                        id: user._id,
                        username: user.username
                    };

                    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

                    return { user: payload, token };
                });
        });
}

function verifyToken(token) {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        throw new Error('Invalid token');
    }
}

module.exports = {
    authenticateUser,
    verifyToken
};
```
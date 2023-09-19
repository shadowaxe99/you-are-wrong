```javascript
// Importing required modules
const fs = require('fs');

// Function to append additional information
function appendInformation(info) {
    // Append the information to a text file
    fs.appendFile('appendices.txt', info, (err) => {
        if (err) throw err;
        console.log('Information appended to file!');
    });
}

module.exports = appendInformation;
```
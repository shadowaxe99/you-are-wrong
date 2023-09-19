```javascript
// Import necessary modules
const fs = require('fs');

// Function to approve PRD
function approvePRD(approvalStatus, approverName) {
    // Check if approval status is true
    if (approvalStatus) {
        // Write approval status to a file
        fs.writeFile('approval.txt', `The PRD has been approved by ${approverName}`, (err) => {
            if (err) throw err;
            console.log('The PRD has been approved.');
        });
    } else {
        console.log('The PRD has not been approved.');
    }
}

module.exports = approvePRD;
```
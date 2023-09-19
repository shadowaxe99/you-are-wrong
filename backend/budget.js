```javascript
const estimateBudget = () => {
    const developmentCost = 50000; // Estimated cost for development
    const hostingCost = 10000; // Estimated cost for hosting
    const maintenanceCost = 20000; // Estimated cost for maintenance

    const totalCost = developmentCost + hostingCost + maintenanceCost;

    console.log(`Estimated Budget: 
    Development: $${developmentCost}
    Hosting: $${hostingCost}
    Maintenance: $${maintenanceCost}
    Total: $${totalCost}`);
}

module.exports = estimateBudget;
```
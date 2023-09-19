```javascript
const database = require('./database.js');

// Function to update the database with new Pokemon data
function updateDatabase() {
    database.fetchPokemonData()
        .then(pokemonData => {
            database.update(pokemonData);
        })
        .catch(error => {
            console.error('Error updating database:', error);
        });
}

// Function to backup the database
function backupDatabase() {
    database.backup()
        .then(() => {
            console.log('Database backup successful');
        })
        .catch(error => {
            console.error('Error backing up database:', error);
        });
}

// Function to recover the database from a backup
function recoverDatabase() {
    database.recover()
        .then(() => {
            console.log('Database recovery successful');
        })
        .catch(error => {
            console.error('Error recovering database:', error);
        });
}

module.exports = {
    updateDatabase,
    backupDatabase,
    recoverDatabase
};
```
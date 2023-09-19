```javascript
const axios = require('axios');
let pokemonData = [];

async function fetchPokemonData() {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
        pokemonData = response.data.results;
        return pokemonData;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    fetchPokemonData,
    pokemonData
};
```
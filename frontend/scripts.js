```javascript
let pokemonData = [];
let searchBar = document.getElementById('searchBar');
let pokemonList = document.getElementById('pokemonList');
let pokemonDetail = document.getElementById('pokemonDetail');

searchBar.addEventListener('keyup', (e) => {
    let searchString = e.target.value.toLowerCase();
    let filteredPokemon = pokemonData.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchString);
    });
    displayPokemonList(filteredPokemon);
});

function fetchPokemonData() {
    fetch('backend/api.js')
        .then(response => response.json())
        .then(data => {
            pokemonData = data;
            displayPokemonList(pokemonData);
        });
}

function displayPokemonList(pokemonArray) {
    const htmlString = pokemonArray
        .map((pokemon) => {
            return `
            <li class="pokemon">
                <h2>${pokemon.name}</h2>
                <p>Type: ${pokemon.type}</p>
                <button onclick="displayPokemonDetail('${pokemon.name}')">View Details</button>
            </li>
        `;
        })
        .join('');
    pokemonList.innerHTML = htmlString;
}

function displayPokemonDetail(pokemonName) {
    const pokemon = pokemonData.find(p => p.name === pokemonName);
    const htmlString = `
        <h2>${pokemon.name}</h2>
        <p>ID: ${pokemon.id}</p>
        <p>Type: ${pokemon.type}</p>
        <p>Abilities: ${pokemon.abilities.join(', ')}</p>
        <p>Attack: ${pokemon.stats.attack}</p>
        <p>Defense: ${pokemon.stats.defense}</p>
        <p>Speed: ${pokemon.stats.speed}</p>
        <img src="${pokemon.images.front_default}" alt="${pokemon.name}">
    `;
    pokemonDetail.innerHTML = htmlString;
}

fetchPokemonData();
```
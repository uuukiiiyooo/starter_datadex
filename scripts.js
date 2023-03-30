const pokemonStarters = [
  { img: '/img/0001Bulbasaur.png', name: "Bulbasaur", type: "Plant", region: "Kanto" },
  { img: '/img/0004Charmander.png', name: "Charmander", type: "Fire", region: "Kanto" },
  { img: '/img/0007Squirtle.png', name: "Squirtle", type: "Water", region: "Kanto" },
  { img: '/img/0152Chikorita.png', name: "Chikorita", type: "Plant", region: "Johto" },
  { img: '/img/0155Cyndaquil.png', name: "Cyndaquil", type: "Fire", region: "Johto" },
  { img: '/img/0158Totodile.png', name: "Totodile", type: "Water", region: "Johto" },
  { img: '/img/0252Treecko.png', name: "Treecko", type: "Plant", region: "Hoenn" },
  { img: '/img/0255Torchic.png', name: "Torchic", type: "Fire", region: "Hoenn" },
  { img: '/img/0258Mudkip.png', name: "Mudkip", type: "Water", region: "Hoenn" },
  { img: '/img/0387Turtwig.png', name: "Turtwig", type: "Plant", region: "Sinnoh" },
  { img: '/img/0390Chimchar.png', name: "Chimchar", type: "Fire", region: "Sinnoh" },
  { img: '/img/0393Piplup.png', name: "Piplup", type: "Water", region: "Sinnoh" },
  { img: '/img/0495Snivy.png', name: "Snivy", type: "Plant", region: "Unova" },
  { img: '/img/0498Tepig.png', name: "Tepig", type: "Fire", region: "Unova" },
  { img: '/img/0501Oshawott.png', name: "Oshawott", type: "Water", region: "Unova" },
  { img: '/img/0650Chespin.png', name: "Chespin", type: "Plant", region: "Kalos" },
  { img: '/img/0653Fennekin.png', name: "Fennekin", type: "Fire", region: "Kalos" },
  { img: '/img/0656Froakie.png', name: "Froakie", type: "Water", region: "Kalos" },
  { img: '/img/0722Rowlet.png', name: "Rowlet", type: "Plant", region: "Alola" },
  { img: '/img/0725Litten.png', name: "Litten", type: "Fire", region: "Alola" },
  { img: '/img/0728Popplio.png', name: "Popplio", type: "Water", region: "Alola" },
  { img: '/img/0810Grookey.png', name: "Grookey", type: "Plant", region: "Galar" },
  { img: '/img/0813Scorbunny.png', name: "Scorbunny", type: "Fire", region: "Galar" },
  { img: '/img/0816Sobble.png', name: "Sobble", type: "Water", region: "Galar" },
  { img: '/img/0906Sprigatito.png', name: "Sprigatito", type: "Plant", region: "Paldea" },
  { img: '/img/0909Fuecoco.png', name: "Fuecoco", type: "Fire", region: "Paldea" },
  { img: '/img/0912Quaxly.png', name: "Quaxly", type: "Water", region: "Paldea" },
];

// Create functions to display filtered and mapped objects
// If is the last object add "and ", the previous adds nothing and the rest adds ","
function displayNames() {
  let mapPokemonNames = pokemonStarters.map(function(pokemon, index) {
    if (index + 1 === pokemonStarters.length) {
      return "and " + pokemon.name;
     } else if (index + 2 === pokemonStarters.length) {
      return pokemon.name;
     } else {
      return pokemon.name + ",";
     }
  });

  return `The names of all starter Pokémon are ${mapPokemonNames.join(" ")}.`;
}

function displayWater() {
  let getWaterStarters = pokemonStarters.filter(function(pokemon) {
    return pokemon.type == "Water";
  });
  
  let mapWaterStarters = getWaterStarters.map(function(pokemon, index) {
    if (index + 1 === getWaterStarters.length) {
      return "and " + pokemon.name;
     } else if (index + 2 === getWaterStarters.length) {
      return pokemon.name;
     } else {
      return pokemon.name + ",";
     }
  });

  return `The names of all water starter Pokémon are ${mapWaterStarters.join(" ")}.`;
}

function displayKanto () {
  let getKantoStarters = pokemonStarters.filter(function(pokemon) {
    return pokemon.region == "Kanto";
  });
  
  let mapKantoStarters = getKantoStarters.map(function(pokemon, index) {
    if (index + 1 === getKantoStarters.length) {
    return "and " + pokemon.name;
   } else if (index + 2 === getKantoStarters.length) {
    return pokemon.name;
   } else {
    return pokemon.name + ",";
   }
  });
  
  return `The names of Kanto's starter Pokémon are ${mapKantoStarters.join(" ")}.`;
}


// Create sentence's dynamic html and display
let pokemonNamesSection = document.getElementById('pokemonNamesSection');
pokemonNamesSection.innerHTML = displayNames(pokemonStarters);

let waterPokemonSection = document.getElementById('waterPokemonSection');
waterPokemonSection.innerHTML = displayWater(pokemonStarters);

let pokemonRegionSection = document.getElementById('pokemonRegionSection');
pokemonRegionSection.innerHTML = displayKanto(pokemonStarters);


//Create data dynamic html display 
function displayObject(pokemon) {
  return `${pokemon.name}`
}

let displayHTML = '';
pokemonStarters.forEach(pokemon => {
  displayHTML += displayObject(pokemon);
});

let pokemonData = document.getElementById(pokemonData);
pokemonData.innerHTML = displayHTML;
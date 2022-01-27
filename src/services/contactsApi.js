import placeholder from '../images/placeholder-hp.png';

//En este archivo hacemos el fetch para la petición a la api

// En la llamada a la API aplico el filtro para mostrar la especie, imagen placeholder, status y género para hacer una sola llamada a la API y limpiar el código de CharacterCard.

const getImage = (image) => {
  return image === '' ? `${placeholder}` : image;
};

const getSpecies = (species) => {
  if (species === 'human') {
    return 'Humano';
  } else if (species === 'half-giant') {
    return 'Semi-gigante';
  } else if (species === 'werewolf') {
    return 'Hombre-lobo';
  } else if (species === 'ghost') {
    return 'Fantasma';
  } else {
    return 'Muggle';
  }
};

const getStatus = (alive) => {
  return alive === true ? `Vivo 🧡` : `Muerto 💀`;
};

//ternario para mostrar el género en español. creamos una función que muestre Mujer u Hombre según el gender de la api. A continuación sólo falta llamar a la función y ejecutar: {getGender()}

const getGender = (gender) => {
  return gender === 'male' ? `Hombre ♂️` : `Mujer ♀️`;
};

const getApiData = (house) => {
  return fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character, index) => {
        return {
          id: `${index}${character.name}`,
          image: getImage(character.image),
          name: character.name,
          species: getSpecies(character.species),
          house: character.house,
          alive: getStatus(character.alive),
          gender: getGender(character.gender),
          altNames: character.alternate_names,
        };
      });
      return cleanData;
    });
};

export default getApiData;
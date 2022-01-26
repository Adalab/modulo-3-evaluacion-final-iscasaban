import placeholder from '../images/placeholder-hp.png';

//En este archivo hacemos el fetch para la petición a la api

//Esta función debe retornar una promesa, que es la que voy a recoger en App para pintar los datos

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
  return alive === true ? `Vivo` : `Muerto`;
};

const getGender = (gender) => {
  return gender === 'male' ? `Hombre` : `Mujer`;
};

const getApiData = (house) => {
  //como debe retornar una promesa, comenzamos con el return. El fetch siempre es igual: llamo a la api para pedir datos y los transformo a formato JSON
  return fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
    .then((response) => response.json()) //then recibe como parámetro una función de tipo arrow, se suele usar response, pero podemos llamarlo como queramos
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
    }); //aquí ya tenemos los datos del api, pero aquí limpiamos para que solo nos retorne los datos que nos interesen. Como queremos todos los elementos del array pero transformados, usamos el método funcional de map. Usaremos filter cuando no queramos todos los datos, sino sólo los que cumplan cierta condición.

  //debemos seleccionar los datos que nos pidan (aquí, nombre, foto, ciudad, género y edad. Pero si hay un id, también nos interesa)
};

export default getApiData;

//exportamos la función para usarla en el componente App

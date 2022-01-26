//En este archivo hacemos el fetch para la petición a la api

//Esta función debe retornar una promesa, que es la que voy a recoger en App para pintar los datos

const getApiData = () => {
  //como debe retornar una promesa, comenzamos con el return. El fetch siempre es igual: llamo a la api para pedir datos y los transformo a formato JSON
  return fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
    .then((response) => response.json()) //then recibe como parámetro una función de tipo arrow, se suele usar response, pero podemos llamarlo como queramos
    .then((data) => {
      const cleanData = data.map((character,index) => {
        return {
          id: `${index}${character.name}${character.dateOfBirth}`,
          image: character.image,
          name: character.name,
          species: character.species,
        };
      });
      return cleanData;
    }); //aquí ya tenemos los datos del api, pero aquí limpiamos para que solo nos retorne los datos que nos interesen. Como queremos todos los elementos del array pero transformados, usamos el método funcional de map. Usaremos filter cuando no queramos todos los datos, sino sólo los que cumplan cierta condición.

  //debemos seleccionar los datos que nos pidan (aquí, nombre, foto, ciudad, género y edad. Pero si hay un id, también nos interesa)
};

export default getApiData;

//exportamos la función para usarla en el componente App

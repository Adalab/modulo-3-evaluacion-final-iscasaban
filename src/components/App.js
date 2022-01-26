import { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import getApiData from '../services/contactsApi';
import Filters from './Filters';
//import CharacterList from './CharacterList';
import '../styles/components/Main.scss';
import CharacterList from './CharacterList';

function App() {
  //el fetch debe hacerse al cargar la página y una sola vez. Por eso usamos el hook useEffect

  //para filtrar creamos una variable de estado en la que guardamos cada uno de los valores de los filtros porque cada vez que aplique un filtro se va a volver a renderizar la página:

  const [characters, setCharacters] = useState([]);

  //useEffect recibe 2 parámetros: 1 lo que quiero ejecutar, y 2 un array que dependiendo de cuántas veces quiero que se ejecute, puede ir lleno o vacío. como queremos que solo lo cargue una sola vez ponemos un array vacío
  useEffect(() => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  //Por ej, si quisiéramos que se ejecutara cada vez que cambia un input que está en una variable estado, pondríamos la variable dentro del array
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <h1>Harry Potter - Buscador de personajes</h1>
      <form action="" className="form" onSubmit={handleSubmit}>
        <label>Busca por personaje:</label>
        <input
          type="text"
          placeholder="Personaje"
          //className=""
          name="character"
          id="character"
        />
        <label>Selecciona la casa:</label>
        <select defaultValue={'Gryffindor'} name="Casa" id="Casa">
          Selecciona la casa:
          <option value="Gryffindor">Gryffindor</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </form>

      <section className="col2">
        <CharacterList characters={characters} />
      </section>
    </>
  );
}

export default App;

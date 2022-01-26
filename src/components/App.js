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
  const [filterName, setFilterName] = useState('');
  
  function searchByHouse(house) {
    getApiData(house).then((charactersData) => {
      setCharacters(charactersData);
    });
  }

  //useEffect recibe 2 parámetros: 1 lo que quiero ejecutar, y 2 un array que dependiendo de cuántas veces quiero que se ejecute, puede ir lleno o vacío. como queremos que solo lo cargue una sola vez ponemos un array vacío
  useEffect(() => {
    searchByHouse('gryffindor');
  }, []);

  //funcion manejadora de los filtros
  const handleFilter = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    } else if (data.key === 'house') {
      searchByHouse(data.value);
    }
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name
      .toLocaleLowerCase()
      .includes(filterName.toLocaleLowerCase());
  });

  //Por ej, si quisiéramos que se ejecutara cada vez que cambia un input que está en una variable estado, pondríamos la variable dentro del array

  return (
    <>
      <h1>Harry Potter - Buscador de personajes</h1>
      <Switch>
        <Route exact path="/">
          <section>
            <Filters handleFilter={handleFilter} filterName={filterName} />
          </section>

          <section className="">
            <CharacterList characters={filteredCharacters} />
          </section>
        </Route>
      </Switch>
    </>
  );
}

export default App;

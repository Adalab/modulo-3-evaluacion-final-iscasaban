import '../styles/components/Main.scss';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import getApiData from '../services/contactsApi';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

function App() {
  //para filtrar creamos una variable de estado en la que guardamos cada uno de los valores de los filtros porque cada vez que aplique un filtro se va a volver a renderizar la página:

  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('Gryffindor');
  const [filterGender, setFilterGender] = useState('All');
  const [filterAlive, setFilterAlive] = useState('Todos');

  function searchByHouse(house) {
    getApiData(house).then((charactersData) => {
      setCharacters(charactersData);
    });
  }

  useEffect(() => {
    searchByHouse(filterHouse);
  }, [filterHouse]);

  //funcion manejadora de los filtros.
  const handleFilter = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    } else if (data.key === 'house') {
      setFilterHouse(data.value);
      searchByHouse(data.value);
    } else if (data.key === 'gender') {
      setFilterGender(data.value);
    } else if (data.key === 'alive') {
      setFilterAlive(data.value);
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name
        .toLocaleLowerCase()
        .includes(filterName.toLocaleLowerCase());
    })
    .filter((character) => {
      if (filterGender === 'All') {
        return true;
      } else {
        return character.gender === filterGender;
      }
    })
    .filter((character) => {
      if (filterAlive === 'Todos') {
        return true;
      } else if (filterAlive === 'Vivo') {
        return character.alive === 'Vivo 🧡';
      } else if (filterAlive === 'Muerto') {
        return character.alive === `Muerto 💀`;
      }
    });
  const renderCharacterDetail = (props) => {
    const routeId = props.match.params.characterId;
    const foundCharacter = characters.find(
      (character) => character.id === routeId
    );
    return <CharacterDetail character={foundCharacter} />;
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <section>
            <Filters
              handleFilter={handleFilter}
              filterName={filterName}
              filterHouse={filterHouse}
              filterGender={filterGender}
              filterAlive={filterAlive}
            />
          </section>

          <section>
            <CharacterList characters={filteredCharacters} />
          </section>
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
    </>
  );
}

export default App;

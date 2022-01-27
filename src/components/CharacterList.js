import CharacterCard from './CharacterCard';

function CharacterList(props) {
  //creamos una constante en la que vamos a guardar todos los elementos del array y los transformamos en elementos li con un map:
  const characterElements = props.characters.map((character) => {
    return (
      <li className="character__card" key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });

  if (props.characters.length === 0) {
    return (
      <section>
        <h4>No existen personajes con ese nombre.</h4>
      </section>
    );
  } else {
    return (
      <section>
        <ul className="character__list">{characterElements}</ul>
      </section>
    );
  }
}

export default CharacterList;

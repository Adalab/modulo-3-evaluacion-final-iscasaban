import CharacterCard from './CharacterCard';

function CharacterList(props) {
  //creamos una constante en la que vamos a guardar todos los elementos del array y los transformamos en elementos li con un map:
  const characterElements = props.characters.map((character) => {
    return (
      <li className="card" key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });
  return (
    <section>
      <ul className="cards">{characterElements}</ul>
    </section>
  );
}

export default CharacterList;

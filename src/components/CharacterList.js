import Character from './Character';

function CharacterList(props) {
  //creamos una constante en la que vamos a guardar todos los elementos del array y los transformamos en elementos li con un map:
  const userElements = props.characters.map((character) => {
    return (
      <li className="card" key={character.id}>
        <Character character={character} />
      </li>
    );
  });
  return (
    <section>
      <ul className="cards">{userElements}</ul>
    </section>
  );
}

export default CharacterList;

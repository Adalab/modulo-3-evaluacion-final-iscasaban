import { Link } from 'react-router-dom';

const Character = (props) => {
  return (
    <Link to={`/character/${props.character.id}`}>
      <img
        className="card__img"
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h4 className="card__title">{props.character.name}</h4>
      <h4 className="card__title">{props.character.species}</h4>
    </Link>
  );
};

export default Character;

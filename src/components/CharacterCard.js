import { Link } from 'react-router-dom';
import placeholder from '../images/placeholder-hp.png';

const Character = (props) => {
  //función condicional para mostrar el género en español. Ojo, si hay más de 2 opciones, no podemos hacer un ternario, tendríamos que hacer un else if por tantos valores como tengamos.
  // const getGender = () => {
  //   return props.character.gender === 'female' ? 'Mujer' : 'Hombre';
  // };

  const getImage = () => {
    return props.character.image === ''
      ? `${placeholder}`
      : props.character.image;
  };
  return (
    <Link to={`/character/${props.character.id}`}>
      <img
        className="card__img"
        src={getImage()}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h4 className="card__title">{props.character.name}</h4>
    </Link>
  );
};

//Mostrar género: la api nos da el género en inglés (female/male). Si ponemos directamente {props.user.gender} pintará en la página male o female. Para poder mostrarlo en español necesitamos un condicional. Por eso creamos una función que muestre Mujer u Hombre según el gender de la api. A continuación sólo falta llamar a la función y ejecutar: {getGender()}

export default Character;

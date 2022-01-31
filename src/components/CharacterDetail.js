import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import placeholder from '../images/placeholder-hp.png';

function CharacterDetail(props) {
  return (
    <>
      <Link className="link" to="/">
        {' '}
        Volver al inicio
      </Link>
      <section className="character__detail">
        <img
          className="character__img detail__img"
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <article className="detail">
          <h4 className="detail__text">{props.character.name}</h4>
          <p className="detail__text">Casa: {props.character.house} </p>
          <p className="detail__text">Estatus: {props.character.alive} </p>
          <p className="detail__text">Género: {props.character.gender}</p>
          <p className="detail__text">Especie: {props.character.species}</p>
          <p className="detail__text">
            Otros nombres: {props.character.altNames}
          </p>
        </article>
      </section>
    </>
  );
}

CharacterDetail.defaultProps = {
  name: 'Personaje desconocido',
  image: placeholder,
  house: 'Desconocida',
  alive: 'Desconocido',
  gender: 'Desconocido',
  species: 'Desconocida',
  altNames: ['Desconocido'],
};

CharacterDetail.propTypes = {
  name: PropTypes.string,
  house: PropTypes.string,
  alive: PropTypes.string,
  gender: PropTypes.string,
  species: PropTypes.string,
  altNames: PropTypes.array,
};

export default CharacterDetail;

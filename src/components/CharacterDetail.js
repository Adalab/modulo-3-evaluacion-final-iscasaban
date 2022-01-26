import { Link } from 'react-router-dom';
function CharacterDetail(props) {
  return (
    <section>
      <Link to="/"> Volver al inicio</Link>
      <img
        className=""
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h4 className="">{props.character.name}</h4>
      <p className="">Casa: {props.character.house} </p>
      <p className="">Estatus: {props.character.alive} </p>
      <p className="">Género: {props.character.gender}</p>
      <p className="">Especie: {props.character.species}</p>
      <p className="">Otros nombres: {props.character.alternate_names}</p>
    </section>
  );
}
export default CharacterDetail;

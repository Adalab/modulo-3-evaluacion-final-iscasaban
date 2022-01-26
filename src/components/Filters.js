import FilterName from './FilterName';
import FilterHouse from './FilterHouse';

const Filter = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form action="" className="form" onSubmit={handleSubmit}>
        <label className="" htmlFor="name">
          Busca por personaje:
        </label>
        <FilterName
          handleFilter={props.handleFilter}
          FilterName={props.FilterName}
        />
        <label className="" htmlFor="name">
          Selecciona la casa:
        </label>
        <FilterHouse
          handleFilter={props.handleFilter}
          FilterHouse={props.FilterHouse}
        />
        {/* 
        <FilterGender />
         */}
      </form>
    </section>
  );
};

export default Filter;

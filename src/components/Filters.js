import FilterName from './FilterName';
import FilterHouse from './FilterHouse';

const Filter = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form action="" className="search__form" onSubmit={handleSubmit}>
        <label className="form__title" htmlFor="name">
          Busca por personaje:
        </label>
        <FilterName
          handleFilter={props.handleFilter}
          filterName={props.filterName}
        />
        <label className="form__title" htmlFor="name">
          Selecciona la casa:
        </label>
        <FilterHouse
          handleFilter={props.handleFilter}
          filterHouse={props.filterHouse}
        />
      </form>
    </section>
  );
};

export default Filter;

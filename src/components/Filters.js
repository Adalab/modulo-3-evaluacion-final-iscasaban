import FilterName from './FilterName';
import FilterHouse from './FilterHouse';
import FilterGender from './FilterGender';
import FilterAlive from './FilterAlive';

const Filters = (props) => {
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
        <label className="form__title" htmlFor="name">
          Género:
        </label>
        <FilterGender
          handleFilter={props.handleFilter}
          FilterGender={props.filterGender}
        />
        <FilterAlive
          handleFilter={props.handleFilter}
          FilterAlive={props.filterAlive}
        />
      </form>
    </section>
  );
};

export default Filters;

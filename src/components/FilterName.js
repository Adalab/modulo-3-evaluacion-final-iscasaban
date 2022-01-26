function FilterName(props) {
  const handleInput = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.currentTarget.value,
    });
  };
  return (
    <>
      <label className="form__label display-block" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        value={props.filterName}
        onChange={handleInput}
      />
    </>
  );
}
export default FilterName;

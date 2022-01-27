function FilterName(props) {
  const handleInput = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.currentTarget.value,
    });
  };

  return (
    <>
      <input
        className="form__input"
        placeholder="Ej. Harry"
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

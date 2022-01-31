function FilterGender(props) {
  const handleInput = (ev) => {
    props.handleFilter({
      key: 'gender',
      value: ev.currentTarget.value,
    });
  };
  return (
    <>
      <select
        className="form__input"
        defaultValue={props.filterGender}
        name="Género"
        id="Género"
        onChange={handleInput}
      >
        <option value="All">Cualquiera</option>
        <option value="Hombre ♂️">Masculino</option>
        <option value="Mujer ♀️">Femenino</option>
      </select>
    </>
  );
}

export default FilterGender;

function FilterHouse(props) {
  const handleInput = (ev) => {
    props.handleFilter({
      key: 'house',
      value: ev.currentTarget.value,
    });
  };

  return (
    <>
      <select
        defaultValue={props.filterHouse}
        name="Casa"
        id="Casa"
        onChange={handleInput}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </>
  );
}
export default FilterHouse;

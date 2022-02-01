function FilterAlive(props) {
  const handleInput = (ev) => {
    props.handleFilter({
      key: 'alive',
      value: ev.currentTarget.value,
    });
  };
  return (
    <>
      Vivo{' '}
      <input
        name="alive"
        type="radio"
        value="Vivo"
        onChange={handleInput}
        checked={props.FilterAlive === 'Vivo'}
      />
      Muerto{' '}
      <input
        name="alive"
        type="radio"
        value="Muerto"
        onChange={handleInput}
        checked={props.FilterAlive === 'Muerto'}
      />
      Todos{' '}
      <input
        name="alive"
        type="radio"
        value="Todos"
        onChange={handleInput}
        checked={props.FilterAlive === 'Todos'}
      />
    </>
  );
}

export default FilterAlive;

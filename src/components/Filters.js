import FilterName from './FilterName';
//import FilterGender from './FilterGender';

const Filter = (props) => {
  return (
    <section>
      <form>
        <FilterName
          handleFilter={props.handleFilter}
          FilterName={props.FilterName}
        />
        {/* 
        <FilterGender />
         */}
      </form>
    </section>
  );
};

export default Filter;

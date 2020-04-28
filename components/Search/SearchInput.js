import React, { useEffect } from 'react';
import { Autocomplete, AutocompleteItem } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { getAllDishes } from '../../redux/reducers/list-reducer';


const filter = (item, query) => item.title.toLowerCase().includes(query.toLowerCase());

const SearchInput = (props) => {
  const dishes = props.dishes
  useEffect(() => {
    props.getAllDishes()
  }, []);

  const [value, setValue] = React.useState(null);
  const [data, setData] = React.useState(dishes);

  const onSelect = (index) => {
    setValue(dishes[index].title);

  };

  const onChangeText = (query) => {
    setValue(query);
    setData(dishes.filter(item => filter(item, query)));
  };

  const renderOption = (item, index) => (
    <AutocompleteItem
      key={index}
      title={item.title}
    />
  );

  return (
    <Autocomplete
      placeholder='Place your Text'
      value={value}
      onSelect={onSelect}
      onChangeText={onChangeText}>
      {data.map(renderOption)}
    </Autocomplete>
  );
};

const mapStateToProps = (state) => {
  return {
    dishes: state.list.allDishes
  }
}
export default connect(mapStateToProps, { getAllDishes })(SearchInput) 
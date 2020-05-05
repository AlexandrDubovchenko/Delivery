import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Input } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { getAllDishes, findDishes, resetFoundDishes } from '../../redux/reducers/list-reducer';

const filter = (value, dishes) => {
  const matches = [];
  dishes.forEach((el) => {
    if (el.title.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
      matches.push(el);
    }
  });
  return matches.length ? matches : false;
};

const SearchInput = (props) => {
  const [found, setFound] = useState(true);
  const { dishes } = props;
  useEffect(() => {
    props.getAllDishes();
  }, []);


  const [value, setValue] = React.useState('');

  return (
    <>
      <Input
        placeholder="Place your Text"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
        onBlur={() => value.length && (filter(value, dishes)
          ? filter(value, dishes).forEach((el) => props
            .findDishes(el.title.split(' ').join('_').toLowerCase(), el.category)) : setFound(false))}
        onFocus={() => {
          setFound(true);
          props.resetFoundDishes();
        }}
      />
      {!found && <Text>По вашему запросу ничего не найдено</Text>}
    </>
  );
};

const mapStateToProps = (state) => (
  {
    dishes: state.list.allDishes,
  }

);

export default connect(mapStateToProps,
  { getAllDishes, resetFoundDishes, findDishes })(SearchInput);

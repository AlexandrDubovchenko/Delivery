import React, { useEffect, useState } from 'react';
import { Input } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { getAllDishes, findDishes, resetFoundDishes } from '../../redux/reducers/list-reducer';
import { Text } from 'react-native';


const filter = (value, dishes) => {
  const matches = [];
  dishes.forEach((el) => {
    el.title.split(' ').forEach((dish) => {
      value.split(' ').forEach(valuePart => {
        if (valuePart.toLowerCase() === dish.toLowerCase()) {
          matches.push({ title: el.title, category: el.category })
        }
      })
    })
  })
  return matches.length ? matches : false
}

export const SearchInput = (props) => {
  const [found, setFound] = useState(true)

  const dishes = props.dishes
  useEffect(() => {
    props.getAllDishes()
  }, []);


  const [value, setValue] = React.useState('');

  return (
    <>
      <Input
        placeholder='Place your Text'
        value={value}
        onChangeText={nextValue => setValue(nextValue)}
        onBlur={() => value.length && (filter(value, dishes) ? filter(value, dishes).forEach(el =>
          props.findDishes(el.title.split(' ').join('_').toLowerCase(), el.category)
        ) : setFound(false))}
        onFocus={()=>{
          setFound(true); 
          props.resetFoundDishes()
        }}
      />
      {!found && <Text>По вашему запросу ничего не найдено</Text>}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    dishes: state.list.allDishes
  }
}


export default connect(mapStateToProps, { getAllDishes, resetFoundDishes, findDishes })(SearchInput)




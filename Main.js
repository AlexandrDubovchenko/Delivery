/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import SignUpScreen from './screens/SignUp';
import SignInScreen from './screens/SignIn';
import Home from './screens/Home';
import DishesScreen from './screens/Dishes';
import ProfileScreen from './screens/Profile';
import SearchScreen from './screens/Search';
import Footer from './components/Footer';
import Header from './components/Header';
import BasketScreen from './screens/Basket';
import OrderScreen from './screens/Order';
import MyOrdersScreen from './screens/MyOrders';
import MapScreen from './screens/Map';
import WelcomeScreen from './screens/Welcome';


const Stack = createStackNavigator();

const Main = ({ isAuth }) => {
  const [isHome, toggleIsHome] = useState(false);
  const [isBasket, toggleIsBasket] = useState(false);
  const [isOrder, toggleIsOrder] = useState(false);
  return (
    <>
      <Header isHome={isHome} isBasket={isBasket} isOrder={isOrder} />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#006400',
            height: 40,
            justifyContent: 'flex-start',


          },
          title: '',
          headerLeft: null,
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={
            ({ route }) => route.params = { toggleIsHome }
          }
        />
        <Stack.Screen
          name="DishesScreen"
          component={DishesScreen}
        />

        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
        />
        <Stack.Screen
          name="MyOrdersScreen"
          component={MyOrdersScreen}
        />
        <Stack.Screen
          name="BasketScreen"
          component={BasketScreen}
          options={
            ({ route }) => route.params = { toggleIsBasket }
          }
        />
        <Stack.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={
            ({ route }) => route.params = { toggleIsOrder }
          }
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
        />
        {
          isAuth
            ? (
              <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
              />
            )

            : (
              <>
                <Stack.Screen
                  name="SignIn"
                  component={SignInScreen}
                />
                <Stack.Screen
                  name="ProfileScreen"
                  component={WelcomeScreen}
                />
                <Stack.Screen
                  name="SignUp"
                  component={SignUpScreen}
                />
              </>
            )


        }


      </Stack.Navigator>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {})(Main);

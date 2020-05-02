import React, { useState } from 'react';
import { WelcomeScreen } from './screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignUpScreen } from './screens/SignUp';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@ui-kitten/components';
import SignInScreen from './screens/SignIn';
import { connect } from 'react-redux';
import store from './redux/store';
import Home from './screens/Home';
import DishesScreen from './screens/Dishes'
import ProfileScreen from './screens/Profile';
import SearchScreen from './screens/Search';
import Footer from './components/Footer';
import Header from './components/Header';
import { BasketScreen } from './screens/Basket';



const Stack = createStackNavigator();

export const Main = (props) => {
    const [isBasket, toggleIsBasket] = useState(false); 
    if (props.isAuth) {
        return (
            <>
                <Header isBasket={isBasket}/>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "#006400",
                            height: 40,
                            justifyContent: "flex-start",
                        
                            
                        },
                        title: '',
                        headerLeft: null,
                        headerShown: false
                    }}
                >
                    <Stack.Screen
                        name="HomeScreen"
                        component={Home}
                    />
                    <Stack.Screen
                        name="DishesScreen"
                        component={DishesScreen}
                    />
                    <Stack.Screen
                        name="ProfileScreen"
                        component={ProfileScreen}
                    />
                    <Stack.Screen
                        name="SearchScreen"
                        component={SearchScreen}
                    />
                    <Stack.Screen
                        name="BasketScreen"
                        component={BasketScreen}
                        options={
                            ({navigation, route}) => route.params = {toggleIsBasket}}
                        

                    />
                </Stack.Navigator>
                <Footer />
            </>
        )
    }
    return (

        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#006400",
                    height: 40
                },
                title: '',
                headerLeft: null
            }}
        >
            <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
            />
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
            />
        </Stack.Navigator>

    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {})(Main)
import React from 'react';
import { WelcomeScreen } from './screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignUpScreen } from './screens/SignUp';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@ui-kitten/components';
import SignInScreen from './screens/SignIn';
import { connect } from 'react-redux';
import store from './redux/store';
import CategoriesListScreen from './screens/CategoriesList';
import CategoryListScreen from './screens/CategoryList'


const Stack = createStackNavigator();


export const Main = () => {
    if (store.getState().auth.isAuth) {
        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <NavigationContainer>
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
                            name="CategoriesScreen"
                            component={CategoriesListScreen}
                        />
                        <Stack.Screen
                            name="CategoryList"
                            component={CategoryListScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ApplicationProvider>
        )
    }
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <NavigationContainer>
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
            </NavigationContainer>
        </ApplicationProvider>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {})(Main)
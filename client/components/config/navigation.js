// Configuration of our TabNavigator:
import React from 'react'

// Navigator imports:
import {
    createSwitchNavigator,
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation'

// Icons import:
import Icon from 'react-native-vector-icons/Ionicons'
// Tabs:
import Home from '../tabs/Home'
import MapView from '../tabs/MapView'
// import AddPost from '../tabs/AddPost'
import Messages from '../tabs/Messages'
import Profile from '../tabs/Profile'

// Login stack:
import Login from '../../components/signUp/Login'
import Register from '../../components/signUp/Register'

// StackNavigator for our Login screens: when a user is SignedOut...
export const SignedOut = createStackNavigator({
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    }
})

// TabNavigator for our Main Tabs -- when a user is SignedIn...
export const SignedIn = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            toBeLabel: 'Home',
            tabBarLabel: ({ tintColor }) => ( // TODO: Sort tint-color?
                <Icon name='ios-home-outline' size={35} />
            )
        }
    },
    MapView: {
        screen: MapView,
        navigationOptions: {
            toBeLabel: 'MapView',
            tabBarLabel: ({ tintColor }) => (
                <Icon name='ios-map-outline' size={35} />
            )
        }
    },
    Messages: {
        screen: Messages,
        navigationOptions: {
            toBeLabel: 'Messages',
            tabBarLabel: ({ tintColor }) => (
                <Icon name='ios-send-outline' size={35} />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            toBeLabel: 'Profile',
            tabBarLabel: ({ tintColor }) => (
                <Icon name='ios-person-outline' size={35} />
            )
        }
    }
})

// const rootNavigator = createSwitchNavigator({ // Decides whether to go to our stack of Login screens, or MainTabs

// })
export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            // if a user is signedIn: render "SignedIn" TabNav; otherwise "SignedOut" StackNav
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    )
}
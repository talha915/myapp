import React from 'react';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import {Dimensions, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import Home from '../pages/Home';
import Sports from '../pages/Sports';
import Technology from '../pages/Technology';
import Chat from '../pages/Chat';

const {height, width} = Dimensions.get('window');

const StackHome = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions:({navigation}) =>({
            headerTitle: 'Home',
            headerTitleStyle: {
                marginLeft: width-240
            },
            headerRight: (
                <TouchableOpacity onPress={() => {navigation.navigate('DrawerToggle')}}>
                    <Icon 
                        name="bars" 
                        type="font-awesome" 
                        size={25} 
                        color={'#666699'}
                        margin={15} 
                    />
                </TouchableOpacity>
            )
        }),
    }
});

const StackSports = StackNavigator({
    Sports: {
        screen: Sports,
        navigationOptions:({navigation})=>({
            headerTitle: 'Sports',
            headerTitleStyle: {
                marginLeft: width-240
            },
            headerRight: (
                <TouchableOpacity onPress={() => {navigation.navigate('DrawerToggle')}}>
                    <Icon 
                        name="bars" 
                        type="font-awesome" 
                        size={25} 
                        color={'#666699'}
                        margin={15} 
                    />
                </TouchableOpacity>
            )
        })
    },
});

const StackTechnology = StackNavigator({
    Technology: {
        screen: Technology,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Technology',
            headerTitleStyle: {
                marginLeft: width-260
            },
            headerRight: (
                <TouchableOpacity onPress={() => {navigation.navigate('DrawerToggle')}}>
                    <Icon 
                        name="bars" 
                        type="font-awesome" 
                        size={25} 
                        color={'#666699'}
                        margin={15} 
                    />
                </TouchableOpacity>
            )
        })
    }
});

const StackChat = StackNavigator({
    Chat: {
        screen: Chat,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Chat',
            headerTitleStyle: {
                marginLeft: width-230
            },
            headerRight: (
                <TouchableOpacity onPress={() => {navigation.navigate('DrawerToggle')}}>
                    <Icon 
                        name="bars" 
                        type="font-awesome" 
                        size={25} 
                        color={'#666699'}
                        margin={15} 
                    />
                </TouchableOpacity>
            )
        })
    }
});

const Screens = DrawerNavigator({
    Home: {screen: StackHome},
    Sports: {screen: StackSports},
    Technology: {screen: StackTechnology},
    Chat: {screen: StackChat} 
});


export default Screens;
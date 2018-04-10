import {DrawerNavigator, StackNavigator} from 'react-navigation';
import {Dimensions} from 'react-native';
import Home from '../pages/Home';
import Sports from '../pages/Sports';
import Technology from '../pages/Technology';
import Chat from '../pages/Chat';

const {height, width} = Dimensions.get('window');

const StackHome = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            headerTitle: 'Home',
            headerTitleStyle: {
                marginLeft: width-240
            }
        },
    }
});

const StackSports = StackNavigator({
    Sports: {
        screen: Sports,
        navigationOptions: {
            headerTitle: 'Sports',
            headerTitleStyle: {
                marginLeft: width-240
            }
        }
    },
});

const StackTechnology = StackNavigator({
    Technology: {
        screen: Technology,
        navigationOptions: {
            headerTitle: 'Technology',
            headerTitleStyle: {
                marginLeft: width-260
            }
        }
    }
});

const StackChat = StackNavigator({
    Chat: {
        screen: Chat,
        navigationOptions: {
            headerTitle: 'Chat',
            headerTitleStyle: {
                marginLeft: width-230
            }
        }
    }
});

const Screens = DrawerNavigator({
    Home: {screen: StackHome},
    Sports: {screen: StackSports},
    Technology: {screen: StackTechnology},
    Chat: {screen: StackChat} 
});


export default Screens;
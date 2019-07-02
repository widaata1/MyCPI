import { createStackNavigator, createAppContainer,  } from 'react-navigation';
import HomeScreen from './HomeScreen';
import RealTime from './RealTime';

const MainNavigator = createStackNavigator({    
        Home: { 
            screen: HomeScreen,
            navigationOptions: () => ({
                header: null
            }), 
        },
        Realtime: { 
            screen: RealTime
        } 
    }
);

const Container = createAppContainer(MainNavigator);

export default Container;
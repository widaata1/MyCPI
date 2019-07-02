import React, { Component } from 'react';
import { View, Button } from 'react-native';
import WorkCenter from './components/WorkCenter';

class RealTime extends Component {
    constructor(props){
        super(props);
    } 
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: '         RealTime Monitor',
            headerStyle: { backgroundColor: 'lightgrey' },
            headerTitleStyle: { color: 'firebrick' },
            headerBackTitleStyle: { color: 'firebrick' },
            headerLeft: (
                <Button
                    title='Home'
                    onPress={() => navigation.navigate('Home')}
                />
            ),   
        };  
    };
    render () {
        return (
            <WorkCenter/>
        );
    }
}

export default RealTime;

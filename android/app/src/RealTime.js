import React, { Component } from 'react';
import { View, Button } from 'react-native';
import WorkCenter from './components/WorkCenter';

class RealTime extends Component {
    constructor(props){
        super(props);
    } 
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: '     RealTime Monitor',
            headerStyle: { backgroundColor: 'lightgrey' },
            headerTitleStyle: { color: 'firebrick', fontsize: 40 },
            headerBackTitleStyle: { color: 'firebrick' },
            headerLeft: (
                <Button
                    title='Back'
                    onPress={() => navigation.navigate('Home')}
                />
            ),   
        };  
    };
    render () {
        return (
            <View>
                <WorkCenter machine='LEAF'/>
                <WorkCenter machine='AUDI'/>
                <WorkCenter machine='BMW'/>
                <WorkCenter machine='CAMARO'/>
                <WorkCenter machine='DATSUN'/>
                <WorkCenter machine='KARMA'/>
                <WorkCenter machine='MALIBU'/>
                <WorkCenter machine='FIAT'/>
                <WorkCenter machine='DESOTO'/>
                <WorkCenter machine='VENTURI'/>
                <WorkCenter machine='VOLT'/>
                <WorkCenter machine='CHALLENGER'/>
                <WorkCenter machine='FERRARI'/>
                <WorkCenter machine='TESLA'/>
                <WorkCenter machine='JETTA'/>
                <WorkCenter machine='PACKARD'/>
                <WorkCenter machine='PORSCHE'/>
                <WorkCenter machine='GMC'/>
                <WorkCenter machine='STUDEBAKER'/>
                <WorkCenter machine='SPARK'/>
                <WorkCenter machine='TRIUMPH'/>
            </View>
        );
    }
}

export default RealTime;

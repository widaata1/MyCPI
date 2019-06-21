import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class BoilerPlate extends Component {
    render () {
        return (
            <View>
                <Text>
                    BoilerPlate Code
                </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('BoilerPlate', () => BoilerPlate);
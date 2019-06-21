import React, { Component } from 'react';
import { View, 
        Text, 
        StyleSheet, 
        ToolbarAndroid, 
        StatusBar } from 'react-native';

class NavHeader extends Component {
    render() {
        return ( 
            <View>
                <StatusBar
                    style={styles.status}
                />  
                <ToolbarAndroid 
                    style={styles.toolbar}
                    logo={require('/users/mwidaatalla/MyCPI/assets/images/menu.png')}
                    title='MyCPI'
                    titleColor='firebrick'
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    status: {
        backgroundColor: 'green'
    },
    toolbar: {
        height: 90,
        backgroundColor: 'lightgrey',
        marginTop: 25,
        fontSize: 65,
        color: 'firebrick'
    }
});

export default NavHeader;


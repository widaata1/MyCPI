import React, { Component } from 'react';
import { View, 
        Text,
        Image,
        TouchableHighlight, 
        StyleSheet } from 'react-native';

class NavHeader extends Component { 
    constructor(props){
        super(props);
        this.state = {
            toggle: true
        }
    } 

    render() {
        return ( 
            <View style={styles.toolbar}>
                <TouchableHighlight 
                    onPress={() => this.setState({ toggle: !this.state.toggle })}
                    underlayColor = 'green'
                >
                    <Image
                        style={styles.picture}
                        source={this.state.toggle ? pic1 : pic2}
                    />
                </TouchableHighlight>
                <Text style={{ fontSize: 60, color: 'firebrick' }}>    MyCPI</Text>
            </View>                    
        );
    }
}
const pic1 =  require('/users/mwidaatalla/MyCPI/assets/images/menu.png');
const pic2 =  require('/users/mwidaatalla/MyCPI/assets/images/arrow.png');  

const styles = StyleSheet.create({
    toolbar: {
        height: 90,
        marginTop: 0,
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    picture: {
        height: 60,
        width: 60,
    }
});

export default NavHeader;


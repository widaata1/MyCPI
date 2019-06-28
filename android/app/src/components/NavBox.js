import React, { Component } from 'react';
import { View, 
        Text,
        Image,
        TouchableHighlight,
        Dimensions, 
        StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';        

class NavBox extends Component {
    constructor(props){
        super(props);
    } 

    render () {
        return (
            <TouchableHighlight
                onPress={() => this.props.navigation.navigate('Realtime')}>
                <View style={styles(this.props).box}>
                    <Text style={styles(this.props).description}>{this.props.title}</Text>
                    <View>
                        <Image 
                            style = {styles(this.props).image}
                            source={this.props.imageSource}
                        />  
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const h = (Dimensions.get('window').height - 24 - 90)/2;
const w = Dimensions.get('window').width/2;

const styles = (props) => StyleSheet.create({
    image: {
        height: w/2,
        width: w/2
    },
    box: {
        height: h, 
        width: w, 
        backgroundColor: props.boxColor, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    description: {
        color: props.textColor, 
        fontSize: 40, 
        textAlign: 'center'
    },
});

export default withNavigation(NavBox);
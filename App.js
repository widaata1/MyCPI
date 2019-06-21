import React, { Component } from 'react';
import NavHeader from './components/NavHeader';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';

export default class App extends Component {
  /*constructor() {
    super()
    this.state = {
      fontLoaded: false
    }
  }
  
  async componentWillMount() {
    await Font.loadAsync({
      'Montserrat-Black': require('./assets/fonts/Montserrat-Black.otf')
    });
    this.setState({ fontLoaded: true })
  }*/
  
  render() {
    return (
      <View>
        <NavHeader/>
        <View style={{flexDirection: 'row'}}>
          <View style={{ height: h, width: w, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{color: 'darkblue', fontSize: 40, textAlign: 'center'}}>Order Status</Text>
            <View>
              <Image 
                style = {styles.image}
                source={require('/users/mwidaatalla/MyCPI/assets/images/sales.png')}
                />  
            </View>
          </View>
          <View style={{ height: h, width: w, backgroundColor: 'darkblue', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'red', fontSize: 40, textAlign: 'center'}}>RealTime Monitor</Text>
            <Image 
                style = {styles.image}
                source={require('/users/mwidaatalla/MyCPI/assets/images/realtime.png')}
                />
          </View> 
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ height: h, width: w, backgroundColor: 'darkblue', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'red', fontSize: 40, textAlign: 'center'}}>CRM</Text>
            <Image 
                style = {styles.image}
                source={require('/users/mwidaatalla/MyCPI/assets/images/shake.png')}
                />
          </View>
          <View style={{ height: h, width: w, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{color: 'darkblue', fontSize: 40, textAlign: 'center'}}>Inventory Status</Text>
            <Image 
                style = {styles.image}
                source={require('/users/mwidaatalla/MyCPI/assets/images/inventory.png')}
                />
          </View>  
        </View>
      </View> 
    ); 
  }
}

const h = (Dimensions.get('window').height - 25 - 90)/2;
const w = Dimensions.get('window').width/2;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: w/2,
    width: w/2
  }
})


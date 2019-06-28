import React, { Component } from 'react';
import NavHeader from './components/NavHeader';
import NavBox from './components/NavBox';
import { View } from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <NavHeader/>
        <View style={{flexDirection: 'row'}}>
          <NavBox
            navigation = {this.props.navigation}
            boxColor = 'red'
            textColor = 'darkblue'
            title = 'Order Status'
            imageSource = {require('/users/mwidaatalla/MyCPI/assets/images/sales.png')}
          />
          <NavBox
            navigation = {this.props.navigation}
            boxColor = 'darkblue'
            textColor = 'red'
            title = 'RealTime Monitor'
            imageSource = {require('/users/mwidaatalla/MyCPI/assets/images/realtime.png')}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <NavBox
            navigation = {this.props.navigation}
            boxColor = 'darkblue'
            textColor = 'red'
            title = 'CRM'
            imageSource = {require('/users/mwidaatalla/MyCPI/assets/images/shake.png')}
          />
          <NavBox
            navigation = {this.props.navigation}
            boxColor = 'red'
            textColor = 'darkblue'
            title = 'Inventory Status'
            imageSource = {require('/users/mwidaatalla/MyCPI/assets/images/inventory.png')}
          /> 
        </View>
      </View> 
    ); 
  }
}

export default HomeScreen;
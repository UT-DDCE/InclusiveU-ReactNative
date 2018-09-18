import React, {Component} from 'react';
import { AppRegistry,StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Router from './routes';

export default class InclusiveU extends Component{
  render(){
    return(
      <Router/>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  topBar:{
    flexDirection:'row',
    flex: 1/10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    width: 350,
    backgroundColor: '#BF5700',
    marginTop:20,
    opacity: 0.9,
    borderRadius: 12,
  },
  hamburger:{
    height: 22.5,
    width: 30,
    left: 15,
    backgroundColor: 'white',
    borderRadius: 3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 2,
  },
  smallRectangle:{
    height:4,
    width: 20,
    borderRadius: 2,
    backgroundColor: 'gray',
  },
  mapContainer:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
AppRegistry.registerComponent('InclusiveU', () => InclusiveU);

/**
 * Sample React Native App
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ORANGE, PINK, WHITE } from '../styles';
import Services from '../src/services';

export default class UpcomingList extends Component {


  render() {
    const {title, backdrop_path} = this.props.data;
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.wrapper}>
          <Image source={{uri: `${Services.imageUrl}w500${backdrop_path}`}} style={styles.img}/>
          <LinearGradient colors={[ORANGE, PINK]} style={styles.overlay}/>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.imgshadow}></View>
        </View>
      </TouchableOpacity>
    );
  }
}
// <View style={styles.imgshadow} />

const styles = StyleSheet.create({
container: {
  width: 350,
  height: 200,
  marginRight: 20
},
wrapper: {
  borderRadius: 6,
  zIndex: 1,
  width: 320,
  height: 250
},
// overlay: {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: 340,
//   height: 250,
//   opacity: 0.3,
//   zIndex: 2
// },
title: {
  fontSize: 20,
  color: WHITE,
  position: 'absolute',
  textAlign: 'center',
  bottom: 20,
  right: 20,
  zIndex: 3
},
img: {
  backgroundColor: 'rgb(230, 230, 230)',
  width: 340,
  height: 250,
  zIndex: 1,
},
imgshadow: {
  top: 16,
  left: 16,
  backgroundColor: '#000',
  opacity: 0.5,
  width: 320,
  height: 225,
  zIndex: 0,
  position: 'absolute',
  shadowOffset: {
    width: 3,
    height: 6,
  },
  shadowOpacity: 1,
  shadowRadius: 9
}
});

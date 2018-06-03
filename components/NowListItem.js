
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
export default class NowListItem extends Component {


  render() {
    const {title, poster_path} = this.props.data;
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.wrapper}>
        <Image source={{uri: `${Services.imageUrl}w500${poster_path}`}} style={styles.img}/>
          <LinearGradient colors={[ORANGE, PINK]} style={styles.overlay}/>
          <Text style={styles.title}>{title}</Text>
          <View STYLE={styles.imgshadow}></View>
        </View>
      </TouchableOpacity>
    );
  }
}
// <View style={styles.imgshadow} />

const styles = StyleSheet.create({
container: {
  width: 150,
  height: 280,
  marginRight: 5,
  justifyContent: 'center',
  alignItems: 'center',
  // overflow: 'scroll'

},
wrapper: {
  borderRadius: 6,
  zIndex: 1,
  width: 320,
  height: 160
},
overlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  width: 150,
  height: 200,
  opacity: 0.3,
  zIndex: 2
},
title: {
  fontSize: 20,
  color: WHITE,
  position: 'absolute',
  bottom: 20,
  right: 20,
  zIndex: 3
},
img: {
  backgroundColor: 'rgb(230, 230, 230)',
  width: 150,
  height: 200,
  zIndex: 1,
},
imgshadow: {
  top: 20,
  left: 8,
  backgroundColor: '#000',
  opacity: 0.5,
  width: 150,
  height: 200,
  zIndex: 0,
  position: 'absolute',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 1,
  shadowRadius: 9
}
});

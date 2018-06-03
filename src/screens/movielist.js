import React, { Component } from 'react';
import {
 Platform,
 StyleSheet,
 Text,
 FlatList,
 View,
 ScrollView,
 LayoutAnimation
} from 'react-native';


import LinearGradient from 'react-native-linear-gradient';
import {ORANGE, PINK, WHITE, GREYBG} from '../../styles';
import UpcomingList from '../../components/upcomingList';
import NowListItem from '../../components/NowListItem';
import Services from '../services';

export default class MovieList extends Component {

 state = {
   upcoming: [
     {id:0, title: ''},
     {id:1, title: ''},
     {id:2, title: ''},
     {id:3, title: ''},
     {id:4, title: ''}
   ]
 }
componentDidMount() {
  Services.getUpcomingMovies().then(response => {
    this.setState({upcoming: response.results});
  })
}

 componentWillUpdate() {
   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
 }

 keyExtractor = item => item.id;

 renderNowPlaying = ({item}) => <NowListItem data={item} />

 renderUpcoming = ({item}) => <UpcomingList data={item} />


 render() {
   return (
     <View style={styles.container}>
       <Text style={styles.title}>MOVIES</Text>
       <FlatList
         data={this.state.upcoming}
         extraData={this.state}
         keyExtractor={this.keyExtractor}
         renderItem={this.renderUpcoming}
         horizontal
       />
       <ScrollView style={styles.listcontainer}>
       <Text>NOW PLAYING</Text>
       <FlatList
         data={this.state.upcoming}
         extraData={this.state}
         keyExtractor={this.keyExtractor}
         renderItem={this.renderNowPlaying}
         horizontal
         />
     </ScrollView>
     </View>
   );
 }

}

const styles = StyleSheet.create({

 container: {
   flex: 1,
   backgroundColor: GREYBG,
   paddingLeft: 20,
 },

 title: {
   fontSize: 24,
   fontWeight: '600',
   marginTop: 30,
 },

});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

import ArtistBox from './artistBox'

export default class Meeusik extends Component {

  render() {

    const artist = {
      image: require('./assets/skillet.png'),
      name: 'Skillet',
      comments: 10,
      likes: 200
    }

    return (
      <View style={styles.container}>
       <ArtistBox artist={artist}/>
       <ArtistBox artist={artist}/>
       <ArtistBox artist={artist}/>
       <ArtistBox artist={artist}/>
       <ArtistBox artist={artist}/>
       <ArtistBox artist={artist}/>
       <ArtistBox artist={artist}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 20
  }

})


AppRegistry.registerComponent('Meeusik', () => Meeusik)

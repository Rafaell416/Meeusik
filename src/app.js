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
  Image,
  ListView
} from 'react-native'

import ArtistBox from './artistBox'

export default class Meeusik extends Component {

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    const artist = {
      image: require('../assets/skillet.png'),
      name: 'Skillet',
      comments: 10,
      likes: 200
    }
    const artists =  Array(500).fill(artist) 
    this.state = {
      dataSource: ds.cloneWithRows(artists)
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(artist) => <ArtistBox artist={artist} />}
      />
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

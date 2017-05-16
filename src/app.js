/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  AppRegistry,
  View
} from 'react-native'

import ArtistBox from './artistBox'
import ArtistList from './artistList'

export default class Meeusik extends Component {

  render() {
    return (
     <View style={styles.container}>
      <ArtistList />
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

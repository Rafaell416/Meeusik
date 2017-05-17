import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'


import ArtistBox from './artistList'
import { getArtists } from './api-client'



export default class ArtistDetail extends Component {

  render() {
    const artist = this.prop.artist

    return (
     <View style={styles.container}>
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

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Platform 
} from 'react-native'

import ArtistList from './artistList'
import { getArtists } from './api-client'



export default class HomeView extends Component {

  state = {
    artists: null
  }

  componentDidMount () {
      getArtists()
        .then(data => this.setState({ artists: data }))
        
  }

  render () {
    const artists = this.state.artists

    if (!artists) {
        return (
        <View style={styles.container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }else{
        return (
        <View style={styles.container}>
          <ArtistList artists={artists} />
        </View>
      )
    }

    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: Platform.select({
      ios: 16,
      android: 0
    })
  }
})
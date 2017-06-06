import React, { Component } from 'react'
import {
  AppRegistry,
  Platform,
} from 'react-native'

import {Scene, Router} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'

import HomeView from './homeView'
import ArtistDetail from  './artistDetail'
import LoginView from  './loginView'
import { getArtists } from './api-client'


class Meeusik extends React.Component {
  render() {

    const isAndroid = Platform.OS === 'android'

    return <Router>
      <Scene key="login" component={LoginView} hideNavBar={true}/>
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar={true}/>
        <Scene key="artistDetail" component={ArtistDetail} hideNavBar={isAndroid}/>
      </Scene>
    </Router>
  }
}
AppRegistry.registerComponent('Meeusik', () => Meeusik)
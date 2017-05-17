import React, { Component } from 'react'
import {
  AppRegistry,
  View
} from 'react-native'


import {Scene, Router} from 'react-native-router-flux'
import homeView from './homeView'

class Meeusik extends React.Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="home" component={homeView} hideNavBar={true}/>
      </Scene>
    </Router>
  }
}



AppRegistry.registerComponent('Meeusik', () => Meeusik)

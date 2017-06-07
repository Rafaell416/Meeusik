import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

import FBSDK, {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk'

import { Actions } from 'react-native-router-flux'

import firebase, { 
  firebaseAuth, 
  firebaseDatabase
 } from '../config'


export default class LoginView extends Component {

  state = {
    credentials: null
  }

  componentWillMount () {
    this.authenticateUser()
  }

  authenticateUser = () => {
    AccessToken.getCurrentAccessToken().then((data) => {
      const { accessToken } = data
      const credential = firebase.auth.FacebookAuthProvider.credential(accessToken) 
        firebaseAuth.signInWithCredential(credential).then((credentials) => {
          Actions.root()
        }, (error) => {
          console.log("Sign In Error", error)
        })
    })
  }

  handleLoginFinished =  (error, result) => {
    if (error) {
        console.error(error)
    } else if (result.isCancelled) {
        alert("login is cancelled.")
    } else {
       this.authenticateUser()
    }
  }


  render () {
    return (

      <Image source={require('../assets/bg.jpg')} style={styles.container}>
      <Image source={require('../assets/ .png')} style={styles.logo}/>
        <Text style={styles.welcome}>
          Welcome to Meeusik
        </Text>
         <LoginButton
          readPermissions={['public_profile', 'email']}
          onLoginFinished={this.handleLoginFinished}
          onLogoutFinished={() => alert("logout.")}
           />
      </Image>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null, 
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: '600',
    backgroundColor: 'transparent',
    color: 'white'
  },
  logo: {
    width: 120,
    height: 120,
    margin: 20
  }
})
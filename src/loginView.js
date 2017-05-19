import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import FBSDK, {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk'

import { Actions } from 'react-native-router-flux'
import * as firebase from 'firebase'
import config from '../config'


firebase.initializeApp(config.firebaseConfig)

const firebaseAuth = firebase.auth()



export default class LoginView extends Component {

  authenticateUser (accessToken) {
    const credential = firebase.auth.FacebookAuthProvider.credential(accessToken) 
    firebaseAuth.signInWithCredential(credential).then(function(user) {
      console.log("Sign In Success", user)
      let currentUser = user
      // Merge prevUser and currentUser accounts and data
      // ...
    }, (error) => {
      console.log("Sign In Error", error)
    })
  }

  handleLoginFinished =  (error, result) => {
    if (error) {
        console.error(error)
    } else if (result.isCancelled) {
        alert("login is cancelled.")
    } else {
        AccessToken.getCurrentAccessToken().then(() => {
          this.authenticateUser(data.accessToken)
        })
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Bienvenido a Meeusik
        </Text>
         <LoginButton
          readPermissions={['public_profile', 'email']}
          onLoginFinished={this.handleLoginFinished}
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: '600',
  }
})
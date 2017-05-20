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
const firebaseDatabase  = firebase.database()



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

      <View style={styles.container}>
        <Text style={styles.welcome}>
          Bienvenido a Meeusik
        </Text>
         <LoginButton
          readPermissions={['public_profile', 'email']}
          onLoginFinished={this.handleLoginFinished}
          onLogoutFinished={() => alert("logout.")}
           />
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
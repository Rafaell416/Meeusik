import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import FBSDK, {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk'


export default class LoginView extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Bienvenido a Meeusik
        </Text>
         <LoginButton
          readPermissions={['public_profile', 'email']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.error(error)
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  }
})
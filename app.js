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
  Image
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class Meeusik extends Component {

  render() {

    const image = require('./assets/skillet.png')
    const name = 'Skillet'
    const likes = 200
    const comments = 10

    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
          <Image style={styles.image} source={image}/>
            <View style={styles.info}>
              <Text style={styles.name}>{name}</Text>
                <View style={styles.row}>
                  <View>
                    <Icon name="ios-heart-outline" size={30} color="#900" />
                    <Text>{likes}</Text>
                  </View>
                   <View>
                    <Icon name="ios-text-outline" size={30} color="#900" />
                    <Text>{comments}</Text>
                  </View>
                </View>
            </View>
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 20
  },
  image: {
    width: 150,
    height: 150
  },
  artistBox:{
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  info:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'
  },
  name: {
    fontSize: 20,
    marginTop: 10
  },
  row: {
    flexDirection: 'row'
  }

})


AppRegistry.registerComponent('Meeusik', () => Meeusik)

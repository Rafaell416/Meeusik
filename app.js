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
                  <View style={styles.iconContainer}>
                    <Icon name="ios-heart-outline" size={30} color="gray" />
                    <Text style={styles.count}>{likes}</Text>
                  </View>
                   <View style={styles.iconContainer}>
                    <Icon name="ios-text-outline" size={30} color="gray" />
                    <Text style={styles.count}>{comments}</Text>
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
    flexDirection: 'column',
    justifyContent: 'center'
  },
  name: {
    fontSize: 20,
    marginTop: 10
  },
  row: {
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 30,
    justifyContent: 'space-between'
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center'
  },
  count: {
    color: 'gray'
  }

})


AppRegistry.registerComponent('Meeusik', () => Meeusik)

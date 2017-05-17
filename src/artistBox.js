/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class ArtistBox extends Component {

  render() {

    const {image, name, likes, comments} = this.props.artist

    return (
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{uri: image}}/>
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
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150
  },
  artistBox:{
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 5,
    shadowColor: 'black',
    shadowOpacity: .5,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 3
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



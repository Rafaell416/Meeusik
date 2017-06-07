import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native'

const defaultAvatar = 'https://www.shareicon.net/data/512x512/2016/07/08/117367_logo_512x512.png'

 const Comment = (props) =>
  <View style={styles.comment}>
  {
    props.avatar ?
      <Image source={{ uri: props.avatar }} style={styles.avatar} /> 
    : <Image source={{ uri: defaultAvatar }} style={styles.avatar} />
  }
	   <Text style={styles.text}>{props.text}</Text>
  </View>

const styles = StyleSheet.create({
  comment: {
    backgroundColor: '#ecf0f1',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    marginLeft: 5
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 16
  }
})

export default Comment

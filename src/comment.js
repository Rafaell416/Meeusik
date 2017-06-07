import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native'


 const Comment = (props) =>
  <View style={styles.comment}>
     <Image source={{ uri: props.avatar }}
            style={styles.avatar} 
     />
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
    borderRadius: 10
  }
})

export default Comment

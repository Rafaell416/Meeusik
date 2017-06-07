import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'


import ArtistBox from './artistBox'
import { getArtists } from './api-client'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  firebaseDatabase,
  firebaseAuth
} from '../config'

import CommentList from './commentList'


export default class ArtistDetail extends Component {

  state = {
    comments: []
  }

  componentDidMount () {
    this.getArtistCommentsRef().on('child_added', this.addComment)
  }

  commponentWillUnmount () {
    this.getArtistCommentsRef().off('child_added', this.addComment)
  }

  addComment = (data) => {
    const comment = data.val()
    this.setState({
      comments: this.state.comments.concat(comment)
    })
  }

  handleSend = () => {
    const { text } = this.state
    const { uid, photoURL } = firebaseAuth.currentUser
    const artistCommentsRef = this.getArtistCommentsRef()
    let newCommentRef = artistCommentsRef.push()
    newCommentRef.set({
      text,
      photoURL,
      uid
    })
    this.setState({ text: '' })
  }

  getArtistCommentsRef = () => {
    const {id} = this.props.artist
    return firebaseDatabase.ref(`comments/ ${id}`)
  }

  handleChangeText = (text) => this.setState({text})

  render() {
    const artist = this.props.artist
    const { comments } = this.state

    return (
      <View style={styles.container}>
        <ArtistBox artist={artist} />
        <Text style={styles.header}>Comentarios</Text>
        <CommentList comments={comments}/>
        <View style={styles.inputContainer}>
          <TextInput
          value={this.state.text}
          style={styles.input}
          placeholder="Type here to comment!"
          onChangeText={this.handleChangeText}
          />
          <TouchableOpacity onPress={this.handleSend}>
            <Icon name="ios-send-outline" size={40} color="gray"/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 70,
  },
  inputContainer: {
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    height: 50,
    flex: 1,
  },
  header: {
    fontSize: 20,
    paddingHorizontal: 15,
    marginVertical: 10
  }
})

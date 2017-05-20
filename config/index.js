import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCD6R-UK61rkrx8fJkjY-CZC9upr8ENsd4",
    authDomain: "meeusik-d45eb.firebaseapp.com",
    databaseURL: "https://meeusik-d45eb.firebaseio.com",
    projectId: "meeusik-d45eb",
    storageBucket: "meeusik-d45eb.appspot.com",
    messagingSenderId: "680676518215"
}

export default firebaseConfig
export const firebaseDatabase  = firebase.database()
export const firebaseAuth = firebase.auth()

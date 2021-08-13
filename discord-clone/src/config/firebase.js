import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCxPe1MmKmXc3_sXM9ESCDyK8mmzpjrOko",
  authDomain: "discord-clone-e954f.firebaseapp.com",
  projectId: "discord-clone-e954f",
  storageBucket: "discord-clone-e954f.appspot.com",
  messagingSenderId: "1029809402626",
  appId: "1:1029809402626:web:056e5dc434edc5c6d1c81b",
  measurementId: "G-5K8W2C2ZZQ",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db

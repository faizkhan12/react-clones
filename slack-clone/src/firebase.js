import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDqV57mpgXXS3HRX_MYtLrGMbgoW-wzOjk",
  authDomain: "slack-clone-7c2da.firebaseapp.com",
  projectId: "slack-clone-7c2da",
  storageBucket: "slack-clone-7c2da.appspot.com",
  messagingSenderId: "384606130842",
  appId: "1:384606130842:web:fe6bb8912e8724d9c90523",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }

import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPfaABhZRNcBhVypUCcs-zuazIVLwqNok",
  authDomain: "clone-151e3.firebaseapp.com",
  projectId: "clone-151e3",
  storageBucket: "clone-151e3.appspot.com",
  messagingSenderId: "471957144614",
  appId: "1:471957144614:web:94106e510fb2fe01a012e7",
  measurementId: "G-M82XSER1PC",
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export default db

import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBy1OcNbxnDtFyYTFsnguRyxG8Kgl4NEuI",
  authDomain: "facebook-clone-dfa9e.firebaseapp.com",
  projectId: "facebook-clone-dfa9e",
  storageBucket: "facebook-clone-dfa9e.appspot.com",
  messagingSenderId: "599741655670",
  appId: "1:599741655670:web:a45fe13f54b8471afa8d57",
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

const storage = firebase.storage()

export { db, storage }

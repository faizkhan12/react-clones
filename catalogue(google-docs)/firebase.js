import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAJHMFmoDPyh5WgN5Y5gf6ykk6Ot65RedU",
  authDomain: "docs-420fb.firebaseapp.com",
  projectId: "docs-420fb",
  storageBucket: "docs-420fb.appspot.com",
  messagingSenderId: "940055793214",
  appId: "1:940055793214:web:e41ca9da019125ef624b6f",
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export { db }

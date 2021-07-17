import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyADLxuz2doeBhDNqlje9LCuzBrpkEw_i00',
  authDomain: 'react-netflix-75998.firebaseapp.com',
  projectId: 'react-netflix-75998',
  storageBucket: 'react-netflix-75998.appspot.com',
  messagingSenderId: '230145547114',
  appId: '1:230145547114:web:bff1d632054ed011f12313',
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;

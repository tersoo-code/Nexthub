// auth.js - Firebase initialization
import { initApi } from './api.js';

const firebaseConfig = {
  apiKey: "AIzaSyAsSlg6vQnEFGg-ulNHWFxRW_wlnQZSBCY",
  authDomain: "nextbub.firebaseapp.com",
  projectId: "nextbub",
  storageBucket: "nextbub.appspot.com", // corrected
  messagingSenderId: "1015111989018",
  appId: "1:1015111989018:web:486e4cdd0ac32bd8f19ea3",
  measurementId: "G-DJMT3VGXCP"
};

export function initAuth() {
  // eslint-disable-next-line no-undef
  const app = firebase.initializeApp(firebaseConfig);
  // eslint-disable-next-line no-undef
  const db = firebase.firestore();
  // eslint-disable-next-line no-undef
  const auth = firebase.auth();
  // eslint-disable-next-line no-undef
  const storage = firebase.storage();
  // eslint-disable-next-line no-undef
  const analytics = firebase.analytics();

  window.appAuth = { firebase, auth, db, storage };
  initApi({ firebaseApp: firebase, db, functionsBaseUrl: 'https://us-central1-nextbub.cloudfunctions.net' });
}

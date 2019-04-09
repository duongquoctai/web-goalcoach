import * as firebase from 'firebase';

const config = {
  apiKey:            process.env.REACT_APP_API_KEY,
  authDomain:        process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL:       process.env.REACT_APP_DB_URL,
  projectId:         process.env.REACT_APP_MESSAGING_SENDER_ID,
  storageBucket:     process.env.REACT_APP_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_STORAGE_BUCKET
}

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDmLaAbuChGcTJPsBapXXfYGzeVCIkJ5J0',
  authDomain: 'learn-dec-2021-cooking-app.firebaseapp.com',
  projectId: 'learn-dec-2021-cooking-app',
  storageBucket: 'learn-dec-2021-cooking-app.appspot.com',
  messagingSenderId: '377188086337',
  appId: '1:377188086337:web:53bf08714d934c62e6ccc0',
};

// initialize firebase app
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

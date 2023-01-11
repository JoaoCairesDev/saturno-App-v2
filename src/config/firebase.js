// Import the functions you need from the SDKs you need
import {firebase} from '@react-native-firebase/auth';
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC2w2rVn36bsD2YV4TLrp1lYGYIrMpdZ-A',
  authDomain: 'authentication-29067.firebaseapp.com',
  projectId: 'authentication-29067',
  storageBucket: 'authentication-29067.appspot.com',
  messagingSenderId: '97744763518',
  appId: '1:97744763518:web:70349bc529522438b5362f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebase;

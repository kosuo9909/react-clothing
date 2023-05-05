import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyCK0jiCC2M63nwNCgICg70wW3Inhl0Ztzo',

  authDomain: 'react-clothing-60832.firebaseapp.com',

  databaseURL: 'https://react-clothing-60832-default-rtdb.firebaseio.com',

  projectId: 'react-clothing-60832',

  storageBucket: 'react-clothing-60832.appspot.com',

  messagingSenderId: '169828976356',

  appId: '1:169828976356:web:f4831ba3ac458c71284ef1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore(app);

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDFPW4Kgouy8lFeMXKRqvZH1AwXXiCZDOU',
  authDomain: 'simple-notes-kataev.firebaseapp.com',
  projectId: 'simple-notes-kataev',
  storageBucket: 'simple-notes-kataev.appspot.com',
  messagingSenderId: '575009857719',
  appId: '1:575009857719:web:62a19e6ddea00ca6b82d32',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

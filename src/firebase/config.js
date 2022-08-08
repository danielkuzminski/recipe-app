import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBx2W3LSB7SLC01ynVrVJyHTJ3ADY93YF8',
  authDomain: 'recipe-9da2d.firebaseapp.com',
  projectId: 'recipe-9da2d',
  storageBucket: 'recipe-9da2d.appspot.com',
  messagingSenderId: '1028395390667',
  appId: '1:1028395390667:web:ef2700f81f79fbd00aed4e',
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };

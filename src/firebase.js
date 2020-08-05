import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDye1abunmx-skbzovXNB3f5yRU79V3aLc',
    authDomain: 'crud-vue-1-a91cf.firebaseapp.com',
    databaseURL: 'https://crud-vue-1-a91cf.firebaseio.com',
    projectId: 'crud-vue-1-a91cf',
    storageBucket: 'crud-vue-1-a91cf.appspot.com',
    messagingSenderId: '520912567440',
    appId: '1:520912567440:web:f0841ab6bc8b16b979ec15',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };

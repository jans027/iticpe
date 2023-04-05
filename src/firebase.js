// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

    // const keys firebase
const API_KEY = `${process.env.REACT_APP_APIKEY}`;
const AUTHDOMAIN = `${process.env.REACT_APP_AUTHDOMAIN}`;
const PROJECTID = `${process.env.REACT_APP_PROJECTID}`;
const MESSAGINGSENDERID = `${process.env.REACT_APP_MESSAGINGSENDERID}`;
const APPID = `${process.env.REACT_APP_APPID}`;
const MEASUREMENTID = `${process.env.REACT_APP_MEASUREMENTID}`;

export const app = firebase.initializeApp({
    'apiKey': API_KEY,
    'authDomain': AUTHDOMAIN,
    'projectId': PROJECTID,
    'storageBucket': "bd-iticco-3478e.appspot.com",
    'messagingSenderId': MESSAGINGSENDERID,
    'appId': APPID,
    'measurementId': MEASUREMENTID
});

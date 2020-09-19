import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';
import authData from './helpers/data/authData';
import auth from './components/auth/auth';
import mynavbar from './components/mynavbar/mynavbar'

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  mynavbar.logoutEvent();
};

init();

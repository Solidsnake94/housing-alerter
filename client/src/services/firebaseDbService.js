import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyCEqf0adm4K4fOl0TKzsepp0YkmRGWsdF8",
  authDomain: "house-offer-alerter.firebaseapp.com",
  databaseURL: "https://house-offer-alerter.firebaseio.com",
  projectId: "house-offer-alerter",
  storageBucket: "house-offer-alerter.appspot.com",
  messagingSenderId: "209126614918"
};

firebase.initializeApp(config);
const db = firebase.database();

var boligportalApartmentsRef = db.ref('server/apartments/boligportal');
boligportalApartmentsRef.on('value', function(snapshot) {
  console.log(snapshot.val());
});
const admin = require("firebase-admin");
const serviceAccount = require("../config/firebaseServiceAccount.json");

class FirebaseDb {
  constructor() {
    this.admin = admin;
    this.serviceAccount = serviceAccount;
    this.admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://house-offer-alerter.firebaseio.com/"
    });
    this.db = admin.database();
  }

  saveApartments(website, apartments) {
    const ref = this.db.ref(`server/apartments`);
    var websiteTypeApartmentsRef = ref.child(website);
    websiteTypeApartmentsRef.set(apartments, error => {
      if (error) {
        console.log("Apartments could not be saved. " + error);
      } else {
        console.log("Apartments saved successfully");
      }
    });
  }

  getApartments(website, callback){
    const ref = this.db.ref(`server/apartments/${website}`);
    ref.on('value', (snapshot) => {
       callback(null, snapshot.val());
    });
  }

}

module.exports = FirebaseDb;

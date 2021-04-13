import app from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAe5NmWJnx2W7Zmu2eur17nrbQdX39OZDs",
    authDomain: "simple-shopping-cart-56f51.firebaseapp.com",
    databaseURL: "https://simple-shopping-cart-56f51-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "simple-shopping-cart-56f51",
    storageBucket: "simple-shopping-cart-56f51.appspot.com",
    messagingSenderId: "296581465969",
    appId: "1:296581465969:web:be013dc621061718b0d8d0"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.database = app.database();
        this.storage = app.storage();
    }
}

const FB = new Firebase();
export default FB;
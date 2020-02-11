import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
    apiKey: "AIzaSyADvKbkR3Pxp-LGrQGonY-R7XpLJ3eFrwE",
    authDomain: "futuretube-4272d.firebaseapp.com",
    databaseURL: "https://futuretube-4272d.firebaseio.com",
    projectId: "futuretube-4272d",
    storageBucket: "futuretube-4272d.appspot.com",
    messagingSenderId: "145349650200",
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

        
    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

}

export default Firebase;

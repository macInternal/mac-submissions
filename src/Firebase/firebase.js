import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDD0b6NNcKwdSVt9Y_RYPgCTz-LWdRkIUk",
  authDomain: "mac-internal.firebaseapp.com",
  databaseURL: "https://mac-internal.firebaseio.com",
  projectId: "mac-internal",
  storageBucket: "mac-internal.appspot.com",
  messagingSenderId: "918912498734",
  appId: "1:918912498734:web:cc5f3814ed729d82e8f3bf",
  measurementId: "G-C4N7LZDZKJ"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
    url: "https://mac-submissions.macinternal.repl.co", //Edit this to be your website URL! This is the location you get redirected to after signing up.
  });

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
        .once('value')
        .then(snapshot => {
          const dbUser = snapshot.val();
          // default empty roles
          if (!dbUser.roles) {
            dbUser.roles = {};
          }
          // merge auth and db user
          authUser = {
            uid: authUser.uid,
            email: authUser.email,
            emailVerified: authUser.emailVerified,
            providerData: authUser.providerData,
            ...dbUser,
          };
          next(authUser);
        });
      }
      else {
        fallback();
      }
  });

  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
}

export default Firebase;
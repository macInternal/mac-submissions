import AuthUserContext from './SessionAuthentication/context';
import withAuthentication from './SessionAuthentication/withAuthentication';
import withAuthorization from './SessionAuthentication/withAuthorization';
import withEmailVerification from './SessionAuthentication/withEmailVerification';
import FirebaseContext, { withFirebase } from './context';
import Firebase from './firebase';

export default Firebase;

export { FirebaseContext, withFirebase, AuthUserContext, withAuthentication, withAuthorization, withEmailVerification };
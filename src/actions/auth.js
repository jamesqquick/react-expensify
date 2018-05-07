import { firebase, emailAuthProvider } from '../firebase/firebase';

export const startLogin = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    };
};

export const login = uid => ({
    type: 'LOGIN',
    uid
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

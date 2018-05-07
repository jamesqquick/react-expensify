import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const emailAuthProvider = new firebase.auth.EmailAuthProvider();

export { firebase, database as default, googleAuthProvider, emailAuthProvider };

// database
//     .ref()
//     .set({
//         name: 'James Quick 2',
//         age: 26,
//         isMarried: true,
//         location: {
//             city: 'Memphis',
//             country: 'United States'
//         }
//     })
//     .then(() => {
//         console.log('updated data');
//         //Now remove is married
//     })
//     .catch(error => {});
// database.ref('location/city').set('New York City');

// database.ref().update({
//     name: 'Bob'
// });

// database
//     .ref()
//     .once('value')
//     .then(snapshot => {
//         console.log(snapshot.val());
//     })
//     .catch(err => {
//         console.log('Error', err);
//     });

// database.ref('notes').on(
//     'value',
//     snapshot => {
//         console.log(snapshot.val());
//         const arr = [];
//         snapshot.forEach(childSnap => {
//             arr.push({
//                 ...childSnap.val(),
//                 id: childSnap.key
//             });
//         });

//         console.log(arr);
//     },
//     err => {
//         console.log('Error listening for data updates');
//     }
// );

// //child removed, child changed events
// database.ref('notes').on('child_changed', snapshot => {
//     console.log('Child changed', snapshot);
// });

// database.ref('notes').on('child_added', snapshot => {
//     console.log('Child added', snapshot);
// });

// database.ref('notes').on('child_removed', snapshot => {
//     console.log('Child removed', snapshot);
// });

// database.ref('notes').push({
//     title: ' Some title',
//     body: 'some body'
// });

//stop listening database.ref().off()

//update can be used to modify, add, or delete properties

//update nested property
//'location/city': 'Chicago'

// database
//     .ref('isMarried')
//     .remove()
//     .then(() => {
//         console.log('success');
//     })
//     .catch(err => {
//         console.log('Error', err);
//     });

//delete -> remove(key) or set to null

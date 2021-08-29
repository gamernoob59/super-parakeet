import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAPtlqMgKNE0SHKBVH94FYA9HUjyGHXqGI",
    authDomain: "soundapp-suggestions.firebaseapp.com",
    databaseURL: "https://soundapp-suggestions-default-rtdb.firebaseio.com",
    projectId: "soundapp-suggestions",
    storageBucket: "soundapp-suggestions.appspot.com",
    messagingSenderId: "876369415296",
    appId: "1:876369415296:web:ba8aa17e2ece6d99dc2a65"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

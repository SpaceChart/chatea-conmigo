var firebaseConfig = {
    apiKey: "AIzaSyB5_gUpJ-pi0LELzANX93HPwt_I8tHg9BU",
    authDomain: "kwitterc93-f2b7d.firebaseapp.com",
    databaseURL: "https://kwitterc93-f2b7d-default-rtdb.firebaseio.com",
    projectId: "kwitterc93-f2b7d",
    storageBucket: "kwitterc93-f2b7d.appspot.com",
    messagingSenderId: "956589542903",
    appId: "1:956589542903:web:fbf2ddafa00867355ef2f2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").ariaValueMax;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}

// Firebase getters and setters
let module;
let signUpFirebase = (email, pass) => {
    const promise = firebase.auth().createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
}
let googleSignUp = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    const promise = firebase.auth().signInWithPopup(provider);
}
let signInFirebase = (email, pass) => {
    const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
}
let signOut = () => {
    // Sign out of Firebase.
    const promise = firebase.auth().signOut();
    promise.catch(e => console.log(e.message));
     //To Do: resolve promise to index page
}

let authListener = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            document.getElementById("sign-success-username").innerText = user.displayName;
            document.getElementById("sign-success-image").style.backgroundImage = url(`${user.photoURL}`);
        } else {
            // No user is signed in.
            document.getElementById("sign-success-username").setAttribute('hidden', 'true');
            document.getElementById("sign-success-image").setAttribute('hidden', 'true');
        }
    });


}
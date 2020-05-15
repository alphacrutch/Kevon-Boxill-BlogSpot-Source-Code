'use strict'
let signIn = () => {
    const emailInput = document.querySelector('#email');
    const passInput = document.querySelector('#password');
    let email = emailInput.value;
    let pass = passInput.value;
    if (email === "" || pass === "") {
        alert("Fill out all Fields!");
        return;
    } else {
        signInFirebase(email, pass);

    }
}
let googleSignIn = () => {
    googleSignUp();
}
let logout = () => {
    signOut();
}

let signUp = () => {
    const emailInput = document.querySelector('#email');
    const passInput = document.querySelector('#password');
    const pass2Input = document.querySelector('#password2');
    let email = emailInput.value;
    let pass = passInput.value;
    let pass2 = pass2Input.value
    if (email.length <= 4) {
        console.log("Enter a valid Email");
        return;
    }
    if (pass.length <= 3) {
        console.log("Password too Short!");
        return;
    }
    if (pass !== pass2) {
        console.log("Passwords do not match! Check Password and try again!");
        return;
    } else {
        signUpFirebase(email, pass);
        const btn = document.querySelector('.signup-close');
        const modal = btn.closest('.modal')
        closeModal(modal);
        let user = firebase.auth().currentUser;
        if (user) {


        } else {
            console.log('logged out');
            return;
        }

        //document.innerHtml = displayProfile;
    }
}




document.querySelector('#submit-form').addEventListener('click', signUp);
//document.querySelector('#signin').addEventListener('click', signIn);
document.querySelector('#google-btn').addEventListener('click', googleSignIn);
//document.querySelector('#logout').addEventListener('click', logout);
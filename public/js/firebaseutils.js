const signupButton = document.getElementById('signup-button');
let firebaseLogin = (email, pass) => {
    const usernameInputElement = document.getElementById('usernameInput');
    const emailInputElement = document.getElementById('emailInput');
    const passInputElement = document.getElementById('newPasswordInput');
    const repassInputElement = document.getElementById('rePasswordInput');
    let usernameInput = usernameInputElement.value;
    let emailInput = emailInputElement.value;
    let passInput = passInputElement.value;
    let repassInput = repassInputElement.value;

    if (usernameInput === "" || usernameInput.length <= 4) {
        alert("enter a valid username, must be at least 5 letters!");
        return;

    }
    if (emailInput === "" || emailInput.length <= 3) {
        alert("Enter a valid email");
        return;
    }
    if (passInput === "" || passInput < 5) {
        alert("Password must be at least 5 letters or numbers!");
        return;
    }
    if (passInput !== repassInput) {
        alert("Passwords must match!");
        return;
    }
    else {
        let email = emailInput;
        let pass = passInput;
        let username = usernameInput;

        firebase.auth().createUserWithEmailAndPassword(email,pass);
        let user = firebase.currentUser;
        user.displayName = username;
    }


}
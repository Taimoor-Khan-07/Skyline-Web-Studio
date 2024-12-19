
// Elements for toggling between login and signup forms
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

// Signup functionality
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};

// Login functionality
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};

// Linking Signup from Login page
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};


function loginUsers (){
    let usersArray = JSON.parse(localStorage.getItem("users"));

     let loginEmail = document.getElementById("loginEmail").value;
     let loginPass = document.getElementById("loginPass").value;

     var flag = false;

for (var i = 0; i < usersArray.length; i++) {
 if (
   loginEmail == usersArray[i].email &&
   loginPass == usersArray[i].password
 ) {
   flag = true;
   alert("Logged in successfully");
   window.location.href = localStorage.getItem("redirectPage") || "index.html";
   return;
 }
}
if (!flag) {
 alert("Please enter correct credentials");
}
}


function signupUsers() {
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPass = document.getElementById("userPass").value;


    let usersArray = JSON.parse(localStorage.getItem("users")) || [];

    for (let i = 0; i < usersArray.length; i++) {
        if (userEmail === usersArray[i].email) {
            alert("Email already in use");
            return;
        }
    }

    let userObject = {
        name: userName,
        email: userEmail,
        password: userPass,
    };

    usersArray.push(userObject);

    localStorage.setItem("users", JSON.stringify(usersArray));

    alert("Signup successful!");
    document.getElementById("signupForm").reset();
    window.location.href = localStorage.getItem("redirectPage") || "index.html";
}
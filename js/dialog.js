let login = document.getElementById('btnLogin');
let dialog = document.getElementById('dialog');
let LoginForm = document.getElementById('LoginForm');
let Email = document.getElementById('Email');
let Password = document.getElementById('Password');
let confirmPassword = document.getElementById('confirmPassword');
let btnSignin = document.getElementById('btnSignin');


login.innerHTML = "Login";
login.style.backgroundColor = "#1caafa";
login.style.width = "150px";
login.style.height = "50px";
login.style.color = "white";
login.style.border = "1px solid #1caafa";
login.style.borderRadius = "50px";
login.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
login.style.fontSize = "15px";
login.style.fontWeight = "bold";
login.style.marginTop = "20%";
login.style.marginLeft = "45%";

dialog.style.display = "none";
dialog.style.width = "400px";
dialog.style.height = "350px";
dialog.style.textAlign = "center";
LoginForm.style.textAlign = "center";
LoginForm.style.padding = "10px";

login.addEventListener('click', () => {
    login.style.display = "none";
    dialog.style.display = "block";
    dialog.style.border = "1px";
    dialog.style.borderColor = "grey";
    dialog.style.borderStyle = "solid";
    dialog.style.borderRadius = "5px";
    dialog.style.padding = "30px";
    dialog.style.marginTop = "100px";
    dialog.style.marginLeft = "500px";
    dialog.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    dialog.style.boxShadow = "10px 10px 20px 15px gainsboro";
})

btnSignin.addEventListener('click', (e) => {
    e.preventDefault();
    var emailPatter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var emailId = Email.value;
    var passwordfir = Password.value;
    var ConfirmPassword = confirmPassword.value;

    if (emailId == "") {
        alert("Please enter your email");
    }else if(!emailPatter.test(emailId)){
        alert("You have entered an invalid email address!")
    } else if (passwordfir == "") {
        alert("Please enter your Password");
    } else if (!passwordPattern.test(passwordfir)) {
        alert("password should contain atleast one number and one special character");
    } else if (passwordfir.length < 8) {
        alert("Password should contains atleast 8 char");
    } else if (ConfirmPassword == "") {
        alert("Please enter your Confirm Password");
    } else if (!passwordPattern.test(ConfirmPassword)) {
        alert("password should contain atleast one number and one special character");
    } else if (passwordfir != ConfirmPassword) {
        alert("Your password and Confirm Password not equal");
    } else {
        console.log(Email.value);
        console.log(Password.value);
        console.log(confirmPassword.value);
        Email.value = "";
        Password.value = "";
        confirmPassword.value = "";
    }
})

setInterval(myTimer, 1000);

function myTimer() {
    let timer = document.getElementById('timer');

    var time = new Date();

    timer.innerHTML = time.toLocaleTimeString();
}

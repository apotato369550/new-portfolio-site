const firebaseConfig = {
    apiKey: "AIzaSyCoAiGwO--zcxdOB5YLwgGF8yBBH8MNB38",
    authDomain: "portfolio-contact-form-a14bc.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-a14bc-default-rtdb.firebaseio.com",
    projectId: "portfolio-contact-form-a14bc",
    storageBucket: "portfolio-contact-form-a14bc.appspot.com",
    messagingSenderId: "518913668704",
    appId: "1:518913668704:web:f14c17cab24d942e0fb505",
    measurementId: "G-86GEWEGY6Z"
};

// initialize firebase
firebase.initializeApp(firebaseConfig)

// reference database
const contactFormDatabase = firebase.database().ref("sample-contact-form")

document.getElementById('contact-form').addEventListener('submit', submitForm)

function submitForm(event){ 
    // do stuff here
    event.preventDefault();

    let name = getElementValue("name");
    let email = getElementValue("email");
    let message = getElementValue("message");

    console.log(name, email, message);

    saveMessages(name, email, message);

    document.querySelector(".alert").style.display = "block";

    clearFields();

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000)

}

const clearFields = () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

const saveMessages = (name, eamil, message) => {
    let newContactForm = contactFormDatabase.push();

    newContactForm.set({
        name: name,
        email: email,
        message: message,
    });
}

const getElementValue = (id) => {
    return document.getElementById(id).value;
}


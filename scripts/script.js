const form = document.getElementById("form");
const emailAddress = document.getElementById("email-address");

form.addEventListener("submit", e => {
    e.preventDefault();

    checkInputs();
})

async function checkInputs() {
    // Remove trailing whitespaces
    const emailAddressValue = emailAddress.value.trim();

    // Check value of emailAddress
    if (emailAddressValue === "" )  {
        setErrorFor(emailAddress, "Email address cannot be empty")
    } else if (!isEmail(emailAddressValue)) {
        setErrorFor(emailAddress, "Please provide a valid email")
    }
    else { setSuccessFor(emailAddress) }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    formControl.className = "form-control error";
    small.innerText = message;

    somethingWentWrong = true;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
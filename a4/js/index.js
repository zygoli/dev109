document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var errorMessages = '';
    var validFirstname = false;
    var validLastname = false;
    var validEmail = false;
    var validPhone = false;
    var validUsername = false;
    var validPassword = false;
    var validAddress = false;
    var validCity = false;
    var validState = false;
    var validCountry = false;
    var validZipcode = false;
    var firstname = document.getElementById("firstname").value;
    if (firstname === null || firstname === "" || firstname.length > 20 || !/^[a-zA-Z]+$/.test(firstname)) {
        errorMessages += "<p>The first name is required, should contain only letters, and cannot be greater than 20 characters.</p>";
    } else {
        validFirstname = true;
    }
    var lastname = document.getElementById("lastname").value;
    if (lastname === null || lastname === "" || lastname.length > 20 || !/^[a-zA-Z]+$/.test(lastname)) {
        errorMessages += "<p>The last name is required, should contain only letters, and cannot be greater than 20 characters.</p>";
    } else {
        validLastname = true;
    }
    var userEmail = document.getElementById("email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (userEmail === null || userEmail === "" || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages += "<p>Invalid email address.</p>";
    } else {
        validEmail = true;
    }
    var phone = document.getElementById("phone").value;
    if (phone === null || phone === "" || phone.length > 15 || !/^[0-9]+$/.test(phone)) {
        errorMessages += "<p>Invalid phone number. It should contain only numbers and not be greater than 15 digits.</p>";
    } else {
        phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        document.getElementById("phone").value = phone;
        validPhone = true;
    }

    var username = document.getElementById("username").value;
    if (username === null || username === "" || username.length > 12) {
        errorMessages += "<p>The username is required and cannot be greater than 12 characters.</p>";
    } else {
        validUsername = true;
    }
    var password = document.getElementById("password").value;
    if (password === null || password === "" || password.length > 7 || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,7}$/.test(password)) {
        errorMessages += "<p>The password is required, should contain at least one lowercase letter, one uppercase letter, one number, and one special character, and cannot be greater than 7 characters.</p>";
    } else {
        validPassword = true;
    }

    var address = document.getElementById("address").value;
    if (address === null || address === "") {
        errorMessages += "<p>The address is required.</p>";
    } else {
        validAddress = true;
    }
    var city = document.getElementById("city").value;
    if (city === null || city === "") {
        errorMessages += "<p>The city is required.</p>";
    } else {
        validCity = true;
    }

    var state = document.getElementById("state").value;
    if (state === null || state === "" || state === "Select State") {
        errorMessages += "<p>Please select a state.</p>";
    } else {
        validState = true;
    }

    var country = document.getElementById("country").value;
    if (country === null || country === "") {
        errorMessages += "<p>Please enter a country.</p>";
    } else {
        validCountry = true;
    }

    var zipcode = document.getElementById("zipcode").value;
    if (country.toLowerCase() === "united states" || country.toUpperCase() === "USA") {
        if (zipcode === null || zipcode === "" || zipcode.length !== 5 || !/^[0-9]+$/.test(zipcode)) {
            errorMessages += "<p>Invalid zip code. It should be 5 digits for USA.</p>";
        } else {
            validZipcode = true;
        }
    } else {
        if (zipcode !== null && zipcode !== "") {
            errorMessages += "<p>Zip code is not required for non-USA countries.</p>";
        } else {
            validZipcode = true;
        }
    }

    if (errorMessages !== '') {
        document.getElementById("errorMessages").innerHTML = errorMessages;
    } else {
        document.getElementById("errorMessages").innerHTML = "Form submitted successfully.";
    }
});
const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const errors = validateForm(formData);

  if (errors.length === 0) {
    form.submit();
    window.location.href = 'thankyou.html';
  } else {
    displayErrors(errors);
  }
});

function validateForm(formData) {
  const errors = [];
  return errors;
}

function displayErrors(errors) {
  const errorElement = document.getElementById('error-message');
  errorElement.innerHTML = '';
  errors.forEach((error) => {
    const errorText = document.createElement('p');
    errorText.textContent = error;
    errorText.style.color = 'red';
    errorElement.appendChild(errorText);
  });
}


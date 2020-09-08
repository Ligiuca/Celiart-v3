function validateName() {
    if (document.body.contains(document.getElementById('name'))) {
        var name = document.getElementById('name').value;
        if (name.length == 0) {
            alert("Completează numele si prenumele.");
            return false;

        }
        if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
            alert("Introdu un nume si prenume valid!"); //Validation Message
            return false;
        }
    }

    return true;
}

function validateFirstName() {
    if (document.body.contains(document.getElementById('FirstName'))) {
        var name = document.getElementById('FirstName').value;
        if (name.length == 0) {
            alert("Completează prenumele.");
            return false;

        }
        if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
            alert("Introdu un prenume valid!"); //Validation Message
            return false;
        }
    }

    return true;
}

function validateLastName() {
    if (document.body.contains(document.getElementById('LastName'))) {
        var name = document.getElementById('LastName').value;
        if (name.length == 0) {
            alert("Completează numele.");
            return false;

        }
        if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
            alert("Introdu un nume valid!"); //Validation Message
            return false;
        }
    }

    return true;
}

function validateStreet() {
    if (document.body.contains(document.getElementById('Street'))) {
        var name = document.getElementById('Street').value;
        if (name.length == 0) {
            alert("Completează numele străzii.");
            return false;

        }
    }

    return true;
}

function validateCity() {
    if (document.body.contains(document.getElementById('City'))) {
        var name = document.getElementById('City').value;
        if (name.length == 0) {
            alert("Completează orașul.");
            return false;

        }
        if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
            alert("Introdu un oraș valid!"); //Validation Message
            return false;
        }
    }

    return true;
}

function validateState() {
    if (document.body.contains(document.getElementById('State'))) {
        var name = document.getElementById('State').value;
        if (name.length == 0) {
            alert("Completează județul.");
            return false;

        }
        if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
            alert("Introdu un județ valid!"); //Validation Message
            return false;
        }
    }

    return true;
}

function validateZipCode() {
    if (document.body.contains(document.getElementById('ZipCode'))) {
        var name = document.getElementById('ZipCode').value;
        if (name.length == 0) {
            alert("Completează codul poștal.");
            return false;

        }
        if (!name.match(/^[0]?[123456789]\d{5}$/)) {
            alert("Introdu un cod poștal valid!"); //Validation Message
            return false;
        }
    }

    return true;
}

function validateMessage() {
    if (document.body.contains(document.getElementById('message'))) {
        var name = document.getElementById('message').value;
        if (name.length == 0) {
            alert("Completează mesajul.");
            return false;

        }
    }

    return true;
}

function validatePhone() {
    var phone = document.getElementById('phone').value;
    if (phone.length == 0) {
        alert("Completează câmpul pentru numărul de telefon"); //Validation Message
        return false;
    }

    if (!phone.match(/^[0]?[789]\d{9}$/)) {
        alert("Introdu un număr valid de telefon!"); //Validation Message
        return false;
    }

    return true;
}

function validateEmail() {
    if (document.body.contains(document.getElementById('email'))) {
        var email = document.getElementById('email').value;
        if (email.length == 0) {
            alert("Email nu poate fi un câmp vid."); //Validation Message
            return false;

        }
        if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            alert("Introdu adresa corectă de email!"); //Validation Message
            return false;
        }
    }

    return true;
}

function validateForm() {
    if (!validateName() || !validateFirstName() || !validateLastName() || !validateEmail() || !validateStreet() || !validateCity() || !validateState() || !validateMessage() || !validateZipCode()) {
        //alert("Form not submitted");
        return false;

    } else {
        if (typeof sendMessage === "function") {
            sendMessage();
            document.getElementById('contactForm').reset();
            document.location.href = '/thank-you/';
        }

        if (typeof sendOrder === "function") {
            sendOrder();
            simpleCart.empty();
            document.getElementById('Checkout').reset();
            document.location.href = '/confirm-order/';
        }
        submitted = true;
        return true;
    }
}
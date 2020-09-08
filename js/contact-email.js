function sendMessage() {
    const name = document.getElementsByName('name')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const message = document.getElementsByName('message')[0].value;
    const body = "Nume: " + name + ", Mesaj: " + message;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "ligia.bodnaras@student.usv.ro",
        Password: "Student3302499",
        To: 'ligia.bodnaras@student.usv.ro',
        From: email,
        Subject: "Contact Celiart Formular",
        Body: body,
    }).then(
        res => alert("Mesaj trimis")
    )
};
function sendOrder() {
    var elements = document.getElementById("Checkout").elements;
    var data ={};

    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        data[item.name] = item.value;
    }

    const { FirstName, LastName, email, Street, City, State, ZipCode} = data;

    let message = `
        <b>Informatii client</b> <br/> <br/>
        Nume complet: ${FirstName} ${LastName} <br/>
        Email: ${email} <br/>
        Strada: ${Street} <br/>
        Oras: ${City} <br/>
        Tara: ${State} <br/>
        Cod postal: ${ZipCode} <br/><br/>

        <b>Informatii comanda</b> <br/> <br/>
    `;

    let infoComanda = '';
    let total = 0;
    simpleCart.each(item => {
        infoComanda += `
        <b>${item.get('name')}</b> x${item.get('quantity')} ${item.get('total')}lei <br/>
       `
       total += item.get('total');
    });

    infoComanda+= "<br/>Total comanda " + total + 'lei';

    message +=  infoComanda;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "ligia.bodnaras@student.usv.ro",
        Password: "Student3302499",
        To: 'ligia.bodnaras@student.usv.ro',
        From: 'ligia.bodnaras@student.usv.ro',
        Subject: "Comanda",
        Body: message,
    }).then(
        res => alert("Comanda trimisa")
    );
}
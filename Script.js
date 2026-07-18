document.getElementById("ticketForm").addEventListener("submit", function(event) {

```
event.preventDefault();


let name = document.getElementById("name").value;


let phone = document.getElementById("phone").value;


let ticketType = document.getElementById("ticketType").value;


let quantity = document.getElementById("quantity").value;


let price;


if (ticketType === "Regular") {

    price = 50;

} else {

    price = 100;

}


let total = price * quantity;


let message =

    "Hello! I want to buy tickets for the UPSA SRC Bash.\n\n" +

    "Full Name: " + name + "\n" +

    "Phone Number: " + phone + "\n" +

    "Ticket Type: " + ticketType + "\n" +

    "Number of Tickets: " + quantity + "\n" +

    "Total Amount: GHS " + total;


let whatsappNumber = "233201470601";


let whatsappLink =

    "https://wa.me/" +

    whatsappNumber +

    "?text=" +

    encodeURIComponent(message);


window.open(whatsappLink, "_blank");


document.getElementById("message").innerText =

    "Your ticket request is ready. Please send the WhatsApp message to complete your booking.";
```

});

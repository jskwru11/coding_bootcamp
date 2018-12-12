

let userName = prompt("What is your name?");
let yesPizza = confirm("Do you like pizza? (click ok for yes)");


if (yesPizza) {
    let toppings = prompt("Great, choose a topping for your pizza!");
    alert(`Nice Work ${userName}, enjoy your ${toppings} pizza!!!`);
} else {
    alert(`Sorry, no pizza for you.`);
}
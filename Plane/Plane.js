const passengers = [
    { name: "Jane Doloop", paid: true, ticket: "coach" },
    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
    { name: "Sue Property", paid: false, ticket: "firstclass" },
    { name: "John Funcall", paid: true, ticket: "premium" }
];

function processPassengers(passengers, test) {
    for (let i = 0; i < passengers.length; i++) {
        if (test(passengers[i])) {
            return false;
        }
    }
    return true;
}

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

function printPassenger(passenger) {
    let message = passenger.name;
    if (passenger.paid) {
        message = message + " has paid";
    } else {
        message = message + " has not paid";
    }
    console.log(message);
    return false;
}

let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no fly list.");
}

let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

processPassengers(passengers, printPassenger);

function createDrinkOrder(passenger) {
    let orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Would you like a cocktail or wine?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            alert("Would you like wine, cola or water?");
        };
    } else {
        orderFunction = function() {
            alert("Your choice is cola or water.");
        };
    }
    return orderFunction;
}

function createDinnerOrder(passenger) {
    let orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Would you like chicken or pasta?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            alert("Would you like a snack box or cheese plate?");
        };
    } else {
        orderFunction = function() {
            alert("Would you like peanuts or pretzels?");
        };
    }
    return orderFunction;
}

function pickupTrash() {
    alert("Can I have your trash, please?");
}

function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    let getDinnerOrderFunction = createDinnerOrder(passenger);

    getDrinkOrderFunction();

    getDinnerOrderFunction();

    getDrinkOrderFunction();
    getDrinkOrderFunction();

    getDrinkOrderFunction();

    pickupTrash();
}

function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);

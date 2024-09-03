// Leap Year Checker Function

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}


// Example usage

let year = parseInt(prompt("Enter a year: "));
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}





// Ticket Pricing Program


function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else if (age >= 18) {
        return 20;
    }
}

// Example usage

let age = parseInt(prompt("Enter your age: "));
let price = getTicketPrice(age);
console.log("The price of the movie ticket is $" + price + ".");
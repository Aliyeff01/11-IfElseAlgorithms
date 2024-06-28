let info = prompt("Enter a number, letter, or symbol:");

if (!isNaN(info) && typeof Number(info) === 'number') {
    console.log("The input is a number.");
} else {
    console.log("The data entered is a letter or symbol.");
}


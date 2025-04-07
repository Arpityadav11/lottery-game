function generateRandomNumber() {
    return Math.floor(100 + Math.random() * 900); // Generates a number between 100 and 999
}

function ticket() {
    return generateRandomNumber();
}

function sumOfDigits(num) {
    const hundreds = Math.floor(num / 100); // Extract the hundreds place
    const tens = Math.floor((num % 100) / 10); // Extract the tens place
    const ones = num % 10; // Extract the ones place
    return hundreds + tens + ones; // Sum of all places
}

export default { generateRandomNumber, ticket,sumOfDigits };

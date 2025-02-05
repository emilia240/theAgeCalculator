/* 
Want to find out how old you'll be? Calculate it!
• Store your birth year in a variable.
• Store a future year in a variable.
• Calculate your 2 possible ages for that year based on the stored values.

For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month
it is in 2026.
• Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.
*/


/* console.log(`I will be either ${} or ${} in ${}.`);
 */
const birthYear = 2000;
let futureYears = [2030, 2051, 2044, 2036, 2033, 2028, 2065, 2057, 2500, 2590];


function pickRandomValues(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};
let randomFutureYear = pickRandomValues(futureYears);

let futureAge = randomFutureYear - birthYear;
let possibleFutureAges = `${futureAge - 1} or ${futureAge}`;    

console.log(`I will be either ${possibleFutureAges} in ${randomFutureYear}.`);



//button and message

const calculateButton = document.getElementById('calculate_button');
const resultMessage = document.getElementById('result');

// an event listener
calculateButton.addEventListener('click', () => {
    let randomFutureYear = pickRandomValues(futureYears);
    let futureAge = randomFutureYear - birthYear;
    let possibleFutureAges = `${futureAge - 1} or ${futureAge}`;
    resultMessage.textContent = `I will be either ${possibleFutureAges} in ${randomFutureYear}.`;
});


const mintMarks = ['P', 'D', 'S'];
const states = [
    'Delaware',
    'Pennsylvania',
    'New Jersey',
    'Georgia',
    'Connecticut',
    'Massachusetts',
    'Maryland',
    'South Carolina',
    'New Hampshire',
    'Virginia',
    'New York',
    'North Carolina',
    'Rhode Island',
    'Vermont',
    'Kentucky',
    'Tennessee',
    'Ohio',
    'Louisiana',
    'Indiana',
    'Mississippi',
    'Illinois',
    'Alabama',
    'Maine',
    'Missouri',
    'Arkansas',
    'Michigan',
    'Florida',
    'Texas',
    'Iowa',
    'Wisconsin',
    'California',
    'Minnesota',
    'Oregon',
    'Kansas',
    'West Virginia',
    'Nevada',
    'Nebraska',
    'Colorado',
    'North Dakota',
    'South Dakota',
    'Montana',
    'Washington',
    'Idaho',
    'Wyoming',
    'Utah',
    'Oklahoma',
    'New Mexico',
    'Arizona',
    'Alaska',
    'Hawaii'
]

//Pennies
let wheatPennies = [];

for (let year = 1909; year <= 1958; year++) {
    for (let mark of mintMarks) {
        wheatPennies.push({
            name: 'Lincoln Wheat Penny',
            denomination: 0.01,
            year: year,
            mintMark: mark
        });
    }
}
console.log(wheatPennies);

let modernPennies = [];

for (let year = 1959; year <= 2023; year++) {
    for (let mark of mintMarks) {
        modernPennies.push({
            name: 'Lincoln Shield Penny',
            denomination: 0.01,
            year: year,
            mintMark: mark
        });
    }
}
console.log(modernPennies);

//Nickles

let buffNickles = [];

for (let year = 1913; year <= 1938; year++) {
    for (let mark of mintMarks) {
        buffNickles.push({
            name: 'Jefferson Nickel',
            denomination: 0.05,
            year: year,
            mintMark: mark
        });
    }
}
console.log(buffNickles);

let jeffNickles = [];

for (let year = 1938; year <= 2023; year++) {
    for (let mark of mintMarks) {
        jeffNickles.push({
            name: 'Jefferson Nickel',
            denomination: 0.05,
            year: year,
            mintMark: mark
        });
    }
}
console.log(jeffNickles);

//Dimes

let mercDimes = [];

for (let year = 1916; year <= 1945; year++) {
    for (let mark of mintMarks) {
        mercDimes.push({
            name: 'Mercury Dime',
            denomination: 0.10,
            year: year,
            mintMark: mark
        });
    }
}
console.log(mercDimes);

let rooseveltDimes = [];

for (let year = 1946; year <= 2023; year++) {
    for (let mark of mintMarks) {
        rooseveltDimes.push({
            name: 'Roosevelt Dime',
            denomination: 0.10,
            year: year,
            mintMark: mark
        });
    }
}
console.log(rooseveltDimes);


//Quarters
let washingtonQuarter = [];

for (let year = 1932; year <= 1998; year++) {
    for (let mark of mintMarks) {
        washingtonQuarter.push({
            name: 'Washington Quarter',
            denomination: 0.25,
            year: year,
            mintMark: mark
        });
    }
}
console.log(washingtonQuarter);

let stateQuarter = [];
let year = 1999;
let stateCount = 0;

for (let i = 0; i < states.length; i++) {
    for (let mark of mintMarks) {
        stateQuarter.push({
            name: states[i],
            denomination: 0.25,
            year: year,
            mintMark: mark
        });
    }
    stateCount++;
    if (stateCount === 5) {
        year++;
        stateCount = 0;
    }
}

//strified to print the full length to the console
// console.log(JSON.stringify(stateQuarter, null, 2));
console.log(stateQuarter)



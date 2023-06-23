const mintMarks = ['P', 'D', 'S'];

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
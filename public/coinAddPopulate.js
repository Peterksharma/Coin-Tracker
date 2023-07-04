// Define all possible options
const denominationOptions = [
    { value: 'penny', text: 'Penny' },
    { value: 'nickel', text: 'Nickel' },
    { value: 'dime', text: 'Dime' },
    // { value: 'quarter', text: 'Quarter' } //Needs to still be added
];

const nameOptions = {
    penny: [
        { value: 'Lincoln Wheat', text: 'Lincoln Wheat' },
        { value: 'Lincoln Memorial', text: 'Lincoln Memorial' },
        { value: 'Lincoln Bicentennial', text: 'Lincoln Bicentennial' },
        { value: 'Lincoln Union Shield', text: 'Lincoln Union Shield' }
    ],
    nickel: [
        { value: 'Buffalo', text: 'Buffalo' },
        { value: 'Jefferson', text: 'Jefferson' }
    ],
    dime: [
        { value: 'Mercury', text: 'Mercury' },
        { value: 'Roosevelt', text: 'Roosevelt' }
    ],
};

const yearOptions = {
    'Lincoln Wheat': Array.from({length: 1959-1909}, (_, i) => 1909 + i),
    'Lincoln Memorial': Array.from({length: 2009-1959}, (_, i) => 1959 + i),
    'Lincoln Bicentennial': [2009],
    'Lincoln Union Shield': Array.from({length: 2024-2010}, (_, i) => 2010 + i),
    'Buffalo': Array.from({length: 1939-1913}, (_, i) => 1913 + i),
    'Jefferson': Array.from({length: 2024-1938}, (_, i) => 1938 + i),
    'Mercury': Array.from({length: 1946-1916}, (_, i) => 1916 + i),
    'Roosevelt': Array.from({length: 2024-1946}, (_, i) => 1946 + i),
}

const mintOptions = ['P', 'D', 'S'];

// Define elements
const denominationDropdown = document.getElementById('denomination');
const nameDropdown = document.getElementById('name');
const yearDropdown = document.getElementById('year');
const mintDropdown = document.getElementById('mint');

// Function to populate options for a select element
function populateOptions(selectElement, options) {
    selectElement.innerHTML = '';
    options.forEach(option => {
        let optionElement = document.createElement('option');
        optionElement.text = option.text || option;
        optionElement.value = option.value || option;
        selectElement.add(optionElement);
    });
}

// Handle denomination change
denominationDropdown.onchange = function() {
    populateOptions(nameDropdown, nameOptions[this.value]);
    nameDropdown.onchange();
};

// Handle name change
nameDropdown.onchange = function() {
    populateOptions(yearDropdown, yearOptions[this.value]);
    yearDropdown.onchange();
};

// Handle year change
yearDropdown.onchange = function() {
    populateOptions(mintDropdown, mintOptions);
};

// Initial population of denominations
populateOptions(denominationDropdown, denominationOptions);
denominationDropdown.onchange();

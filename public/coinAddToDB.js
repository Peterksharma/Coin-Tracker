let userId; //userId needs to be declared in the global scope
var notyf = new Notyf();

fetch('/api/user/userdata')
    .then(response => response.json())
    .then(data => {
        userId = data.id;
    })
    .catch((error) => {
        console.error('Error:', error);
    });

document.getElementById('coinAddBtn').addEventListener('click', function() {
    const denomination = document.getElementById('denomination').value;
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
    const mint = document.getElementById('mint').value;
    //const userId = //This needs to be finished to get the user id to add with the coin to the collection,

    // Create an coinObject with key+values
    const coinData = {
        user_id: userId,
        name: name,
        denomination: denomination,
        year: year,
        mint: mint,
    };

    // Send a POST request to the server for adding a coin
    fetch('/api/coinCollectionRoutes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(coinData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('There is an error coming from the network.')
        }
        return response.json();
    })
    .then(data => {
        if(data.error) {
            // alert(`Coin wasn't added because: ${data.error}`);
            notyf.error('Coin was not added, something went awry.');

        } else {
            notyf.success('Coin added was successfully.');
        }
    })
    .catch((error) => {
        console.error('I am an errror!', error);
    });
});

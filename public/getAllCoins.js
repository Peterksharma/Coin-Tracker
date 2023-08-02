document.getElementById('viewCollectionBtn').addEventListener('click', function() {
    fetch(`/api/coin/user/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('coins-container');
            container.innerHTML = '';
            data.forEach(coin => {
                const coinElement = document.createElement('div');
                coinElement.textContent = `-${coin.name}, ${coin.denomination}, ${coin.year}, ${coin.mint}`;
                container.appendChild(coinElement);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

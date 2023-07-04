document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                window.location.href = '/dashboard'; // Redirect to dashboard or wherever you want, need to change once we get the page from Jennie
            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData);
                console.error('Error details:', JSON.stringify(errorData, null, 2));
                alert('Login failed: ' + (errorData.message || ''));
            }
        } catch (error) {
            alert('An error occurred during login: ' + error.message);
        }
    });
});

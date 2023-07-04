
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('register-form');

  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (password.length < 8) {
      e.preventDefault();
      alert('Password needs to be 8 char long.');
      return;
    }


    try {
      const response = await fetch('api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // alert('Registration successful!'); // or handle success in a different way
        window.location.href = '/'; // redirect to the home page after successful registration
      } else {
        const data = await response.json();
        alert(data.error); // or handle failure in a different way
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during registration. Please try again'); // or handle error in a different way
    }
  });
});

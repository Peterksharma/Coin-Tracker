
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
  
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
  
        if (response.ok) {
          alert('Registration successful!'); // or handle success in a different way
          window.location.href = '/login'; // redirect to the login page after successful registration
        } else {
          alert('Registration failed. Too poor?'); // or handle failure in a different way
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred during registration.'); // or handle error in a different way
      }
    });
  });
  
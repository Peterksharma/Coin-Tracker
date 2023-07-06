const { response } = require("express");

fetch('/api/userdata')
    .then(response => {
        if(!response.ok) {
            throw new Error('Your authentication to be able to use this is DENIED.')
        } return response.json();
    })
    .catch (error =>  {
        console.error('I am an error, please fix what broke me :(', error);
    })
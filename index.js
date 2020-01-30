'use strict'

var inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your github user name?',
            name: 'username'
        },

        {
            type: 'input',
            message: 'What is your favorite color?',
            name: 'color'
        }
    ])
    .then(function (response) {
        console.log(response);

    });




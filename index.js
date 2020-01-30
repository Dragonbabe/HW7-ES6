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
            type: 'list',
            message: 'What is your favorite color?',
            name: 'color',
            choices: ['orange', 'yellow', 'red', 'blue', 'green', 'purple', 'pink', 'black', 'white',]
        }
    ])
    .then(function (response) {
        console.log(response);

    });




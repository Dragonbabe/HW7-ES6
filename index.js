'use strict'

var inquirer = require('inquirer');
const axios = require('axios');

const questions = [
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
];

async function init() {
    try {
        const userInfo = await inquirer.prompt(questions);
        const gitHub = await axios.get(`https://api.github.com/users/${userInfo.username}`)
        console.log(gitHub.data);
    } catch (err) {
        console.error(err);
    }


};

init()








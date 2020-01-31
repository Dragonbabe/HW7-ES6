'use strict'

var inquirer = require('inquirer');
const axios = require('axios');

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             message: 'What is your github user name?',
//             name: 'username'
//         },

//         {
//             type: 'list',
//             message: 'What is your favorite color?',
//             name: 'color',
//             choices: ['orange', 'yellow', 'red', 'blue', 'green', 'purple', 'pink', 'black', 'white',]
//         }
//     ])
//     .then(
async function init() {
    try {
        const userInfo = await inquirer.prompt({
            type: 'input',
            message: 'what is your git hub username?',
            name: 'username'
        });
        const GH = await axios.get(`https://api.github.com/users/${userInfo.username}`)
        console.log(GH.data);
    } catch (err) {
        console.error(err);
    }


};

init()








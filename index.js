'use strict'

var inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const html2canvas = require('html2canvas');
const jsPdf = require('jsPdf')

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
        choices: ['magenta', 'turquoise', 'blue', 'green', 'purple']
    }
];

async function init() {
    try {
        const userInfo = await inquirer.prompt(questions);
        const gitHub = await axios.get(`https://api.github.com/users/${userInfo.username}`)
        const repos = await axios.get(`https://api.github.com/users/${userInfo.username}/starred`);

        const starCount = repos.data.length;

        await writeFileAsync('index.html', generateHTML(userInfo.color, starCount, gitHub.data), 'utf8');
        console.log(gitHub.data);
    } catch (err) {
        console.error(err);
    }
};

import html2canvas from 'html2canvas'
import jsPdf from 'jsPdf'

function printPDF() {
    const domElement = document.getElementById('your-id')
    html2canvas(domElement, {
        onclone: (document) => {
            document.getElementById('print-button').style.visibility = 'hidden'
        }
    })
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPdf()
            pdf.addImage(imgData, 'JPEG', 0, 0, width, height)
            pdf.save(' https://dragonbabe.github.io/HW7-ES6/')
        });
}



function generateHTML(color, starCount, gitHub) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Node!</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <style>
            .parent-container {
                background-color: ${color};
            }
    
            .parent-container2 {
                background-color: ${color};
            }
    
            .parent-container3 {
                background-color: ${color};
            }
    
            .card-header {
                font-size: 100px;
            }
           
    
       
        </style>
    </head>
    
    <body>
        <div class="parent-container">
            <div class="box">
                <h2 class="header"></h2>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card text-center">
                                <div class="card-header">
                                    Hi!
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">My name is ${gitHub.name}</h5>
                                    <p class="card-text">Currently working at ${gitHub.company}</p>
                                </div>
                                <div class="card-footer text-muted">
                                    <a href="${gitHub.location}">Me!</a>
                                    <a href="${gitHub.blog}">Blog</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="parent-container2">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <img src="${gitHub.avatar_url}" alt="" class="img-thumbnail card-img-top">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="parent-container3">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">Public Repositories</h5>
                                <p class="card-text">${gitHub.public_repos}
                                </p>
                                <a href="#" class="card-link"></a>
                                <a href="#" class="card-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">Followers</h5>
                                <p class="card-text">${gitHub.followers}
                                </p>
                                <a href="#" class="card-link"></a>
                                <a href="#" class="card-link"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">GitHub Stars</h5>
                                <p class="card-text">${starCount}
                                </p>
                                <a href="#" class="card-link"></a>
                                <a href="#" class="card-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">Following</h5>
                                <p class="card-text">${gitHub.following}
                                </p>
                                <a href="#" class="card-link"></a>
                                <a href="#" class="card-link"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </body>
    
    </html>`





}

init()

printPDF()








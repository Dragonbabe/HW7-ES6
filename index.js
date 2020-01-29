const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

rl.question('what is your name?', (answer) => {
    console.log(`Nice to meet you: ${answer}`);
    rl.close();
});

const color = require('favecolor');

const



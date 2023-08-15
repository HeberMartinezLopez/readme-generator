// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter Title: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add Description: ',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Did you have to install anything for this program?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license would you like?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: ',
    }, 
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter your GitHub username: ',
    }, 
    {
        type: 'input',
        name: 'test',
        message: 'Did you run any tests?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Did anyone contribute?'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log('generating readme', answers)
    }) 
}

// Function call to initialize app
init();

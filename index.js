// packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const path = require('path');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter project Title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add Description of project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Are there any installations necessary in order to run this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How does this project work?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license would you like for this project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you run the tests written for this project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    }, 
    {
        type: 'input',
        name: 'GitHub',
        message: 'Enter your GitHub username:',
    },
];

// function to initialize app
function init() {
    console.log("   ");
    inquirer.prompt(questions).then((answers)=>{
        console.log("       ");
        console.log(`Generating Professional README.md for ${answers.title}...`);
        writeToFile('README.md', generateMarkdown({...answers}));
    }) 
}

// function to write README file
function writeToFile(fileName, data) {
    
    return fs.writeFileSync(path.join(fileName), data);
}

// Function call to initialize app
init();

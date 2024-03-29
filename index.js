// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const fileName = 'README-Walkthrough.md';


// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    message: "What is the title of this project?",
    name: "title"
}, 
{
    type: "input",
    message: "What is this project about? Please provide a detailed description.",
    name: "description"
},
{
    type: "input",
    message: "Table of Contents",
    name: "toc"
},
{
    type: "input",
    message: "What steps are required to install this project?",
    name: "installation"
},
{
    type: "input",
    message: "Provide instructions for how to use this project.",
    name: "usage"
},
{
    type: "input",
    message: "Provide a link to the deployed project webpage or repository here.",
    name: "deployed"
},
{
    type: "input",
    message: "Provide any test instructions for the program.",
    name: "tests"
},
{
    type: "input",
    message: "List the names and profiles of any project collaborators.",
    name: "contributing"
},
{
    type: "input",
    message: "Enter the license used for this project.",
    name: "license"
},
{
    type: "input",
    message: "Please enter your email address.",
    name: "email"
},
{
    type: "input",
    message: "Please enter your GitHub username.",
    name: "username"
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README file successfully written!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => writeToFile('README-Walkthrough.md', generateMarkdown(answers)));
}

// Function call to initialize app
init();

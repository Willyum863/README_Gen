// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer")
var generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project about? Provide a short description explaining the what, why, and how of your project."
    },
    {
        type: "input",
        name: "install",
        message: "what is requried to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use"
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators or and third-party assets"
    },
    {
        type: "input",
        name: "features",
        message: "List your projects features"
    },
    {
        type: "input",
        name: "contribute",
        message: "How can others contribute?"
    },
    {
        type: "input",
        name: "tests",
        message: "What tests can be run and how?"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email?"
    },
    {
        type: "input",
        name: "github",
        message: "what is your github username?"
    },
    {
        type: "list",
        name: "license",
        message: "what kind of license shoud your project have?",
        choices: ["MIT","BSD","GLP","None"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        const readMEGen = generateMarkdown({...data});
        console.log(readMEGen);
        writeToFile("README.md",readMEGen);
    });
}

// Function call to initialize app
init();

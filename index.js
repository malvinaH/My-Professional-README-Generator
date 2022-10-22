// DEPENDENCIES
// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// FUNCTIONS

// USER INTERACTION AND DATA
// Array of questions for user input
const init = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: "What is your project's title?",
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('Please enter your title!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub Username?',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter your email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please write a short description of your project.',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter a short desvription!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'install',
                message: 'Please provide step-by-step installation instructions on how to get your project running.',
                validate: installInput => {
                    if (installInput) {
                        return true;
                    } else {
                        console.log('Please enter your installation instructions!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please provide instructions and examples for use including screenshots if needed.',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('Please enter your use instructions!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'license',
                message: 'Which license will you use for your project?',
                choices: ['APACHE 2.0', 'MIT', 'BSD 3', 'None']
            },
            {
                type: 'input',
                name: 'contribute',
                message: 'Please provide guidelines for contributing.',
                validate: contributerInput => {
                    if (contributerInput) {
                        return true;
                    } else {
                        console.log('Please enter guidelines for your contributors!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Please provide instructions on how to test the app.',
                validate: testInput => {
                    if (testInput) {
                        return true;
                    } else {
                        console.log('Please enter instructions on how to use your app!');
                        return false;
                    }
                }
            }
        ]).then(response => {

    })
    }



// INITIALIZATION
    init();
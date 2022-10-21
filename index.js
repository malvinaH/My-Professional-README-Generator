// DEPENDENCIES
// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// FUNCTIONS

// Function to write README file


// USER INTERACTION AND DATA
// Array of questions for user input
const init = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: "What is your project's title? (Required)",
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
                message: 'What is your GitHub Username? (Required)',
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
                message: 'What is your email address? (Required)',
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
                message: 'Please write a short description of your project. (Required)',
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
                name: 'purpose',
                message: 'Why did you build this project/What problem does it solve? (Required)',
                validate: purposeInput => {
                    if (purposeInput) {
                        return true;
                    } else {
                        console.log('Please enter why did you build this app!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'standout',
                message: 'What makes your project stand out? (Required)',
                validate: standoutInput => {
                    if (standoutInput) {
                        return true;
                    } else {
                        console.log('Please enter what makes your project stand out!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'learn',
                message: 'What did you learn? (Required)',
                validate: whatInput => {
                    if (whatInput) {
                        return true;
                    } else {
                        console.log('Please enter what did you learn!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Please provide step-by-step installation instructions on how to get your project running. (Required)',
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
                message: 'Please provide instructions and examples for use including screenshots if needed. (Required)',
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
                choices: ['GPL 3.0', 'APACHE 2.0', 'MIT', 'BSD 3', 'None']
            },
            {
                type: 'confirm',
                name: 'confirmContributers',
                message: 'Would you like to allow other developers to contribute?',
                default: true
            },
            {
                type: 'input',
                name: 'contribute',
                message: 'Please provide guidelines for contributing. (Required)',
                when: ({ guidelinesContributers }) => {
                    if (guidelinesContributers) {
                        return true;
                    } else {
                        return false;
                    }
                },
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
                message: 'Please provide instructions on how to test the app. (Required)',
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
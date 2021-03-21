const Manager = require('../lib/Manager-SubClass');
const Engineer = require('../lib/Engineer-SubClass');
const Intern = require('../lib/Intern-SubClass');
const inquirer = require('inquirer');

const genericQuestions = [
    {
        type: 'list',
        message: 'Enter the employees Role:',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        message: 'Enter the employees Name:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Enter the employees ID:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter the employees Email:',
        name: 'email'
    },
]

const uniqueQuestions = [
    {
        type: 'input',
        message: "Enter the manager's office number:",
        name: 'officeNumber'
    },
    {
        type: 'input',
        message: "Enter the engineer's github username:",
        name: 'github'
    },
    {
        type: 'input',
        message: "Enter the intern's school:",
        name: 'school'
    }
]

function getNewTeamMemberData() {
    inquirer
        .prompt(genericQuestions)
        .then((response) => {
            switch (response.role) {
                case 'Manager':
                    break;
                case 'Engineer':
                    break;
                case 'Intern':
                    break;
            }
        })
}

module.exports = getNewTeamMemberData;

//how to escape out of the then tree with response data? 
//should return a Manager, Engineer, or Intern object 
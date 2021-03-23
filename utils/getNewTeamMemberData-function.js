const Manager = require('../lib/Manager-SubClass');
const Engineer = require('../lib/Engineer-SubClass');
const Intern = require('../lib/Intern-SubClass');
const inquirer = require('inquirer');

const questions = [
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
    {
        type: 'input',
        message: "Enter the manager's office number:",
        name: 'officeNumber',
        when: data => data.role === 'Manager'
    },
    {
        type: 'input',
        message: "Enter the engineer's github username:",
        name: 'github',
        when: data => data.role === 'Engineer'
    },
    {
        type: 'input',
        message: "Enter the intern's school:",
        name: 'school',
        when: data => data.role === 'Intern'
    }
]


async function getNewTeamMemberData() {
    let teamMember;
    await inquirer
        .prompt(questions)
        .then((response) => {
            //make response into employee obj
            switch (response.role) {
                case 'Manager':
                    teamMember = new Manager(response.name, response.id, response.email, response.officeNumber);
                    break;
                case 'Engineer':
                    teamMember = new Engineer(response.name, response.id, response.email, response.github);
                    break;
                case 'Intern':
                    teamMember = new Intern(response.name, response.id, response.email, response.school);
                    break;
            }
        })
    return teamMember;
}

module.exports = getNewTeamMemberData;
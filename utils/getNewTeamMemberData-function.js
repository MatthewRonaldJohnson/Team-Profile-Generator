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

<<<<<<< HEAD
async function getNewTeamMemberData() {
    let output = 'nothing';
    await inquirer
        .prompt(genericQuestions)
=======

async function getNewTeamMemberData() {
    let teamMember;
    await inquirer
        .prompt(questions)
>>>>>>> call-fun-from-fun
        .then((response) => {
            //make response into employee obj
            switch (response.role) {
                case 'Manager':
<<<<<<< HEAD
                    inquirer
                        .prompt(uniqueQuestions[0])
                        .then((officeNumber) => {
                            output= new Manager(response.name, response.id, response.email, officeNumber.officeNumber)
                        })
                    break;
                case 'Engineer':
                    inquirer
                        .prompt(uniqueQuestions[0])
                        .then((github) => {
                            output = new Engineer(response.name, response.id, response.email, github.github)
                        })
                    break;
                case 'Intern':
                    inquirer
                        .prompt(uniqueQuestions[0])
                        .then((school) => {
                            output = new Intern(response.name, response.id, response.email, school.school)
                        })
=======
                    teamMember = new Manager(response.name, response.id, response.email, response.officeNumber);
                    break;
                case 'Engineer':
                    teamMember = new Engineer(response.name, response.id, response.email, response.github);
                    break;
                case 'Intern':
                    teamMember = new Intern(response.name, response.id, response.email, response.school);
>>>>>>> call-fun-from-fun
                    break;
            }

        })
<<<<<<< HEAD
    console.log(output + 'logged')
    return output;
}

console.log(getNewTeamMemberData());

//module.exports = getNewTeamMemberData;

//how to escape out of the then tree with response data? 
//should return a Manager, Engineer, or Intern object 
=======
    return teamMember;
}

module.exports = getNewTeamMemberData;
>>>>>>> call-fun-from-fun

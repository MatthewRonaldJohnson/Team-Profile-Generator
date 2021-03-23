const inquirer = require('inquirer');

const checkIfDone = async function () {
    const answer = await inquirer
        .prompt({
            type: 'confirm',
            message: 'Do you want to add another Team Member?',
            name: 'moreEnteries'
        })
    return answer.moreEnteries
}

module.exports = checkIfDone;
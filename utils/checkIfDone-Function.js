const inquirer = require('inquirer');

const checkIfDone = async function () {
    const answer = await inquirer
        .prompt({
            type: 'confirm',
            message: 'Do you want to add another Team Member?',
            name: 'moreEnteries'
        })
    console.log(answer)
    return answer.moreEnteries
}

const logWhenDone = async function() {
    console.log(await checkIfDone());
}()

//how to not set check until the inuirer promise has resolved?

module.exports = checkIfDone;
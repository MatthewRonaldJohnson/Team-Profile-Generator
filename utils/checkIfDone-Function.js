const inquirer = require('inquirer');

const checkIfDone = function(){
    inquirer   
        .prompt({
            type: 'confirm',
            message: 'Do you want to add another Team Member?',
            name: 'moreEnteries'
        })
        .then((answer) =>{
            console.log(answer);
            return answer.moreEnteries;
        })
}

//how to not set check until the inuirer promise has resolved?

module.exports = checkIfDone;
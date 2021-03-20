const Manager = require('./lib/Manager-SubClass');
const Engineer = require('./lib/Engineer-SubClass');
const Intern = require('./lib/Intern-SubClass');

function init(){
    let moreEnteries = true;
    const htmlCards = [];
    while(moreEnteries){
        //ask for role
        //get info based on role
        //generate HTML card
        //store card in array
        htmlCards.push(generateHTMLCard(newTeamMember()));
         //ask if more enteries
        moreEnteries = checkIfDone();
    }
    //generate html page with card array
    generateHTMLPage(htmlCards);
}

init();
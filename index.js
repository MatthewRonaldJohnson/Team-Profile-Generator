const getNewTeamMemberData = require('./utils/getNewTeamMemberData-function')
const generateHTMLCard = require('./utils/generateHTMLCard-Function')
const checkIfDone = require('./utils/checkIfDone-Function')
const generateHTMLPage = require('./utils/generateHTMLPage-Function')

function init(){
    let moreEnteries = true;
    const htmlCards = [];
    while(moreEnteries){
        htmlCards.push(generateHTMLCard(getNewTeamMemberData()));
        moreEnteries = checkIfDone();
    }
    generateHTMLPage(htmlCards);
}

init();
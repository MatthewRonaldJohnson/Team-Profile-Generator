const getNewTeamMemberData = require('./utils/getNewTeamMemberData-function')
const checkIfDone = require('./utils/checkIfDone-Function')
const generateHTMLPage = require('./utils/generateHTMLPage-Function')
const generateHTMLCard = require('./utils/generateHTMLCard-Function')

async function init(){
    let moreEnteries = true;
    const htmlCards = [];
    while(moreEnteries){
        const newTeamMember = await getNewTeamMemberData();
        const newTeamMemberCard = generateHTMLCard(newTeamMember)
        htmlCards.push(newTeamMemberCard);
        moreEnteries = await checkIfDone();
    }
    generateHTMLPage(htmlCards);
}

init();
const getNewTeamMemberData = require('./utils/getNewTeamMemberData-function')
const checkIfDone = require('./utils/checkIfDone-Function')
const generateHTMLPage = require('./utils/generateHTMLPage-Function')

async function init(){
    let moreEnteries = true;
    const htmlCards = [];
    while(moreEnteries){
        await htmlCards.push(getNewTeamMemberData());
        moreEnteries = checkIfDone();
        console.log('still going')
    }
    //generateHTMLPage(htmlCards);
    console.log('done')
}

init();
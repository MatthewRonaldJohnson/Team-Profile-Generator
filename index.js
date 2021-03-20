function init(){
    let moreEnteries = true;
    const htmlCards = [];
    while(moreEnteries){
        //ask for role
        //get info based on role
        //generate HTML card
        //store card in array
        htmlCards.push(generateHTMLCard(getNewTeamMemberData()));
         //ask if more enteries
        moreEnteries = checkIfDone();
    }
    //generate html page with card array
    generateHTMLPage(htmlCards);
}

init();
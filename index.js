const getNewTeamMemberData = require('./utils/getNewTeamMemberData-function')
const checkIfDone = require('./utils/checkIfDone-Function')
const generateHTMLCard = require('./utils/generateHTMLCard-Function')
const fs = require('fs');

const starterHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="examplestyle.css">
    <title>Example</title>
</head>
<body>
    <header class="header">My Team</header>
    <main class="card-container">
    `

const endHTML = `    
</main>
</body>
</html>`

async function init() {
    fs.writeFile('./dist/index.html', starterHTML, (err) => {if (err) { console.error(err) }});
    let moreEnteries = true;
    while (moreEnteries) {
        const newTeamMember = await getNewTeamMemberData();
        const newTeamMemberCard = generateHTMLCard(newTeamMember)
        fs.appendFile('./dist/index.html', newTeamMemberCard, (err) => {if (err) { console.error(err) }});
        moreEnteries = await checkIfDone();
    }
    fs.appendFile('./dist/index.html', endHTML, (err) => {if (err) { console.error(err) }});
}

init();


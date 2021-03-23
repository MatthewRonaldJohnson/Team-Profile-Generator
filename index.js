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
    <link rel="stylesheet" href="style.css">
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

const resetContent = `/* http://meyerweb.com/eric/tools/css/reset/ 
v2.0 | 20110126
License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
 margin: 0;
 padding: 0;
 border: 0;
 font-size: 100%;
 font: inherit;
 vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
 display: block;
}
body {
 line-height: 1;
}
ol, ul {
 list-style: none;
}
blockquote, q {
 quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
 content: '';
 content: none;
}
table {
 border-collapse: collapse;
 border-spacing: 0;
}`

const styleContent = `.header{
    width: 100%;
    height: 100px;
    background-color: red;
    text-align: center;
    line-height: 100px;
    font-size: 48px;
    color: white;
}

.card-container{
    display: flex;
    padding: 50px;
    justify-content: center;
    flex-wrap: wrap;
}

.card{
    width: 300px;
    height: 400px;
    border: solid black;
    margin: 25px;
}

.card-header{
    background-color: lightblue;
    height: 100px;
    font-size: 32px;
    line-height:50px;
    padding: 10px;
}
.card-body{
    padding: 25px;
}

.card-info{
    border: black solid;
    border-width: thin;
    font-size: 20px;
    padding: 15px;
    word-wrap: break-word;
}`

async function init() {
    fs.writeFile('./dist/reset.css', resetContent, (err) => { if (err) { console.error(err) } }); //creates the reset.css file
    fs.writeFile('./dist/style.css', styleContent, (err) => { if (err) { console.error(err) } }); //creates the style.css file
    fs.writeFile('./dist/index.html', starterHTML, (err) => { if (err) { console.error(err) } }); //creates the output html file
    let moreEnteries = true; //variable that will tell loop if it should continue or not 
    while (moreEnteries) {
        const newTeamMember = await getNewTeamMemberData(); //ask user for data on next teammember, returns a Manager, Employee, or Intern object
        const newTeamMemberCard = generateHTMLCard(newTeamMember) //extract the data from the employee object and returns a string that equates to an HTML element 
        fs.appendFile('./dist/index.html', newTeamMemberCard, (err) => { if (err) { console.error(err) } }); //adds the newly generated html element to our index.html file
        moreEnteries = await checkIfDone(); //ask the user if we should end the loop or add another team member
    }
    //once user says they do not wish to add any more teammebers, we finish the html file, and console log where they can find the output
    fs.appendFile('./dist/index.html', endHTML, (err) =>
        err ?
            console.error(err) :
            console.log('Team Profile File Created. Find it in the dist folder, it is the index.html file. To keep the styling you will also need to download the reset.css and style.css files.'));
}

init();


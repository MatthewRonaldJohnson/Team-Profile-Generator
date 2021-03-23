const fs = require('fs');
const util = require('util')
const writeFile = util.promisify(fs.writeFile)
const appendFile = util.promisify(fs.appendFile)

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

// const generateHTMLPage = function (htmlCards) {
//     fs.writeFile('../dist/index.html', starterHTML, function (err) {
//         err ? console.error(err) : console.log('Created HTML file')
//     }
//     );
//     htmlCards.forEach(card => {
//         fs.appendFile('../dist/index.html', card, function (err){
//             err ? console.error(err) : console.log('Card Added')}
//         );
//     });
//     fs.appendFile('../dist/index.html', endHTML, (err) =>
//         err ? console.error(err) : console.log('HTML File Finished')
//     );
// }


//need to get these sections of appending to file to add in order
//how to do without christmas tree?


const generateHTMLPage = async function (htmlCards) {
    await writeFile('../dist/index.html', starterHTML);
    await htmlCards.forEach(async(card)=> {
        await appendFile('../dist/index.html', card);
    });
    appendFile('../dist/index.html', endHTML);
}

//module.exports = generateHTMLPage;

htmlCards =[`
<section class="card">
<div class="card-header">
    <h3 class="card-name">Logan</h3>
    <h4 class="card-role">☕ Manager</h4>
</div>
<div class="card-body">
    <ul class="card-contents">
        <li class="card-info">ID: 01}</li>
        <li class="card-info"><a href="mailto:MatthewRonaldJohnson@gmail.com">Email: MatthewRonaldJohnson@gmail.com</a></li>
        <li class="card-info">Office Number: 101</li>
    </ul>
</div>
</section>
`,
`<section class="card">
    <div class="card-header">
        <h3 class="card-name">Matt</h3>
        <h4 class="card-role">👓 Engineer</h4>
    </div>
    <div class="card-body">
        <ul class="card-contents">
            <li class="card-info">ID: 02</li>
            <li class="card-info"><a href="mailto:MatthewRonaldJohnson@gmail.com">Email: MatthewRonaldJohnson@gmail.com</a></li>
            <li class="card-info">Github: <a href="https://github.com/MatthewRonaldJohnson}" target='_blank'> MatthewRonaldJohnson}</a></li>
        </ul>
    </div>
</section>
    `,
    `<section class="card">
    <div class="card-header">
        <h3 class="card-name">Allison</h3>
        <h4 class="card-role">👩‍🎓 Intern</h4>
    </div>
    <div class="card-body">
        <ul class="card-contents">
            <li class="card-info">ID: 03</li>
            <li class="card-info"><a href="mailto:MatthewRonaldJohnson@gmail.com">Email: MatthewRonaldJohnson@gmail.com</a></li>
            <li class="card-info">LSMSA</li>
        </ul>
    </div>
</section>
    `]

generateHTMLPage(htmlCards);
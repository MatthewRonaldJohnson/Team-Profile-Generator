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
    <main class="card-container">`

const endHTML = `    </main>
</body>
</html>`

const generateHTMLPage = function (htmlCards) {
    fs.writeFile('../dist/index.html', starterHTML, (err) =>
        err ? console.error(err) : console.log('Created HTML file')
    );
    htmlCards.forEach(card => {
        fs.appendFile('../dist/index.html', card, (err) =>
            err ? console.error(err) : console.log('Card Added')
        );
    });
    fs.appendFile('../dist/index.html', endHTML, (err) =>
        err ? console.error(err) : console.log('HTML File Finished')
    );
}

htmlCards = [
    `<section class="card">
    <div class="card-header">
        <h3 class="card-name">test</h3>
        <h4 class="card-role">test role</h4>
    </div>
    <div class="card-body">
        <ul class="card-contents">
            <li class="card-info">ID: 01</li>
            <li class="card-info"><a href="mailto:email">Email: email</a></li>
            <li class="card-info">unique</li>
        </ul>
    </div>
</section>
    `, `<section class="card">
    <div class="card-header">
        <h3 class="card-name">test</h3>
        <h4 class="card-role">test role</h4>
    </div>
    <div class="card-body">
        <ul class="card-contents">
            <li class="card-info">ID: 01</li>
            <li class="card-info"><a href="mailto:email">Email: email</a></li>
            <li class="card-info">unique</li>
        </ul>
    </div>
</section>
    `, `<section class="card">
    <div class="card-header">
        <h3 class="card-name">test</h3>
        <h4 class="card-role">test role</h4>
    </div>
    <div class="card-body">
        <ul class="card-contents">
            <li class="card-info">ID: 01</li>
            <li class="card-info"><a href="mailto:email">Email: email</a></li>
            <li class="card-info">unique</li>
        </ul>
    </div>
</section>
    `
]

generateHTMLPage(htmlCards);

//need to get these sections of appending to file to add in order
//how to do without christmas tree?

module.exports = generateHTMLPage;
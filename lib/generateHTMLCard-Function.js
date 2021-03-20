const Engineer = require('./Engineer-SubClass');

const generateHTMLCard = function (response) {
    let role;
    let unquieAttr;
    switch (response.getRole()) {
        case 'Manager':
            role = '☕ Manager';
            unquieAttr = `Office Number: ${response.getOfficeNumber()}`;
            break;
        case 'Engineer':
            role = '👓 Engineer';
            unquieAttr = `Github: <a href="https://github.com/${response.getGithub()}" target='_blank'> ${response.getGithub()}</a>`
            break;
        case 'Intern':
            role = '👩‍🎓 Intern';
            unquieAttr = `School: ${response.getSchool()}`
            break;
        default:
    }
    return `<section class="card">
    <div class="card-header">
        <h3 class="card-name">${response.name}</h3>
        <h4 class="card-role">${role}</h4>
    </div>
    <div class="card-body">
        <ul class="card-contents">
            <li class="card-info">ID: ${response.getId()}</li>
            <li class="card-info"><a href="mailto:${response.getEmail()}">Email: ${response.getEmail()}</a></li>
            <li class="card-info">${unquieAttr}</li>
        </ul>
    </div>
</section>
    `
}

module.exports = generateHTMLCard;
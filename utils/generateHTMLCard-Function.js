const generateHTMLCard = function (employee) {
    let role;
    let unquieAttr;
    switch (employee.getRole()) {
        case 'Manager':
            role = '☕ Manager';
            unquieAttr = `Office Number: ${employee.getOfficeNumber()}`;
            break;
        case 'Engineer':
            role = '👓 Engineer';
            unquieAttr = `Github: <a href="https://github.com/${employee.getGithub()}" target='_blank'> ${employee.getGithub()}</a>`
            break;
        case 'Intern':
            role = '👩‍🎓 Intern';
            unquieAttr = `School: ${employee.getSchool()}`
            break;
        default:
    }
    return `<section class="card">
    <div class="card-header">
        <h3 class="card-name">${employee.name}</h3>
        <h4 class="card-role">${role}</h4>
    </div>
    <div class="card-body">
        <ul class="card-contents">
            <li class="card-info">ID: ${employee.getId()}</li>
            <li class="card-info"><a href="mailto:${employee.getEmail()}">Email: ${employee.getEmail()}</a></li>
            <li class="card-info">${unquieAttr}</li>
        </ul>
    </div>
</section>
    `
}

module.exports = generateHTMLCard;

//returns a string of html that codes for an employee card
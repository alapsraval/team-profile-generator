const generateMemberCard = (member) => {
    return `<div class="col-md-4 py-3">
                <div class="card">
                    ${setCardHeader(member)}
                    ${setCardBody(member)}
                </div>
            </div>`
};

const setCardHeader = (member) => {
    const role = member.getRole();
    const name = member.getName();
    let cardHeaderHtml = `<div class="card-header text-light`;
    switch (role) {
        case 'Manager':
            cardHeaderHtml = `${cardHeaderHtml} bg-dark"><span class="float-left h3">${name}<br><small>${role}</small></span><i class="fas fa-user-tie fa-2x float-right"></i> `;
            break;
        case 'Engineer':
            cardHeaderHtml = `${cardHeaderHtml} bg-secondary"><span class="float-left h3">${name}<br><small>${role}</small></span><i class="fas fa-glasses fa-2x float-right"></i> `;
            break;
        case 'Intern':
            cardHeaderHtml = `${cardHeaderHtml} bg-success"><span class="float-left h3">${name}<br><small>${role}</small></span><i class="fas fa-user-graduate fa-2x float-right"></i> `;
            break;
        default:
            cardHeaderHtml = `${cardHeaderHtml} bg-secondary"><span class="float-left h3">${name}<br><small>${role}</small></span><i class="fas fa-user fa-2x float-right"></i> `;
            break;
    }
    cardHeaderHtml = `${cardHeaderHtml}</div>`;
    return cardHeaderHtml;
}

const setCardBody = (member) => {
    const role = member.getRole();
    let cardBodyHtml = `<div class="card-body bg-light">
                        <ul class="list-group">
                        <li class="list-group-item">ID: ${member.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${member.getEmail()}" target="_blank">${member.getEmail()}</a></li>
                        <li class="list-group-item">`;
    switch (role) {
        case 'Manager':
            cardBodyHtml = `${cardBodyHtml}Office number: ${member.getOfficeNumber()}`;
            break;
        case 'Engineer':
            cardBodyHtml = `${cardBodyHtml}GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a>`;
            break;
        case 'Intern':
            cardBodyHtml = `${cardBodyHtml}School: ${member.getSchool()}`;
            break;
        default:
            cardBodyHtml = `${cardBodyHtml}Office number: ${member.getOfficeNumber()}`;
            break;
    }
    cardBodyHtml = `${cardBodyHtml}</li></ul></div>`;
    return cardBodyHtml;
}

module.exports = (team) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/e99b468fc4.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron bg-info text-light text-center display-4">
                    My Team
                </div>
            </div>
        </header>
        <main class="container">
            <div class="row justify-content-center">
        ${team.map(member => generateMemberCard(member)).join('')}
        </div>
        </main>
    </body>
    </html>`;
}
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const output_dir = path.resolve(__dirname, 'dist');
const output_path = path.join(output_dir, 'index.html');

const htmlTemplate = require('./src/html-template');

function createFile(input) {
    if (!fs.existsSync(output_dir)) {
        fs.mkdirSync(output_dir);
    }
    fs.writeFileSync(output_path, input, 'utf-8');
}

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamMembers = [];

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team manager\'s name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the team manager\'s employee id?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team manager\'s email address?'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the team manager\'s office number?'
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        showAddMemberOptions();
    });
}

function showAddMemberOptions() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberOption',
            message: 'What would you like to do next?',
            choices: [
                {
                    name: "Add an Engineer",
                    value: "Engineer"
                },
                {
                    name: "Add an Intern",
                    value: "Intern"
                },
                {
                    name: "Finish building my team",
                    value: "Team"
                }
            ],
        },
    ]).then(answers => {
        if (answers.memberOption === 'Engineer') {
            addEngineer();
        } else if (answers.memberOption === 'Intern') {
            addIntern();
        } else {
            createTeam();
        }
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the engineer\'s employee id?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the engineer\'s github username?'
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        // push engineer on to team
        teamMembers.push(engineer);
        showAddMemberOptions();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern\'s name?',
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the intern\'s emaployee id?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern\'s email address?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the intern\'s school name?'
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        showAddMemberOptions();
    });
}

function createTeam() {
    const htmlPageContent = htmlTemplate(teamMembers);
    createFile(htmlPageContent);
}

addManager();
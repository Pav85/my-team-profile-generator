const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// starter and pseudo code given by Dan M

inquirer
  .prompt([
    //managerquestions
    {
      type: "input",
      message: "What is team manager's name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is team manager's Id?",
      name: "managerId",
    },
    {
      type: "input",
      message: "What is team manager's email?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "What is team manager's office number?",
      name: "managerOfficeNumber",
    },
  ])
  .then((response) => {
    // populate manager info
    promptForNexEMployee();
  });

const promptForNextEmployee = () => {
  inquirer
    .prompt([
      {
        // choice of 3
        type: "list",
        message: "Please select a type of a team member you would like to add",
        name: "teamMemberType",
        choices: ["Engineer", "Intern", "Finish building this team"],
      },
    ])
    .then((response) => {
      // if engineer
      //    promptForEngineer
      // else if intern
      //    promptForIntern
      // else
      //    use the functionality from page-template to generate the team
      generateTeam(team);
    });
};

const promptForEngineer = () => {
  inquirer
    .prompt([
      //engineer questions
      {
        type: "input",
        message: "What is your engineer's name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is your engineer's Id?",
        name: "engineerId",
      },
      {
        type: "input",
        message: "What is your engineer's email?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is your engineer's Github username?",
        name: "engineerGithubUsername",
      },
    ])
    .then((response) => {
      // add new engineer to employees array
      // promptForNextEmployee
    });
};

const promptForIntern = () => {
  inquirer
    .prompt([
      //intern questions
      {
        type: "input",
        message: "What is your intern's name?",
        name: "internName",
      },
      {
        type: "input",
        message: "What is your intern's Id?",
        name: "internId",
      },
      {
        type: "input",
        message: "What is your intern's email?",
        name: "internEmail",
      },
      {
        type: "input",
        message: "What is your intern's school?",
        name: "internSchool",
      },
    ])
    .then((response) => {
      // add new intern to employees array
      // promptForNextEmployee
    });
};

const buildPage = () => {};

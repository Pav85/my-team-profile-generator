const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const validator = require("validator");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const team = []; // team members array

// starter and pseudo code given by Dan M

// function for manager information below

const promptForManager = () => {
  inquirer
    .prompt([
      // manager questions
      {
        type: "input",
        message: "What is team manager's name?",
        name: "name",
        validate: function (input) {
          if (input === "") {
            return "Please enter manager's name";
          } else if (validator.isNumeric(input)) {
            return "Name must not be a number";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is team manager's Id?",
        name: "id",
        default: "number",
        validate: function (input) {
          if (input === "" || !validator.isNumeric(input)) {
            return "Please enter numeric value";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is team manager's email?",
        name: "email",
        default: "foo@bar.com",
        validate: function (input) {
          if (input === "" || !validator.isEmail(input)) {
            return "Please enter valid email";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is team manager's office number?",
        name: "officeNumber",
        validate: function (input) {
          if (input === "" || !validator.isNumeric(input)) {
            return "Please enter numeric value";
          } else {
            return true;
          }
        },
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      team.push(manager);
      promptForNextEmployee();
    });
};

// function for next employee request

const promptForNextEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select a type of a team member you would like to add",
        name: "teamMemberType",
        choices: ["Engineer", "Intern", "Finish building the team"],
        default: "Use arrow keys",
      },
    ])
    .then((response) => {
      if (response.teamMemberType === "Engineer") {
        promptForEngineer();
      } else if (response.teamMemberType === "Intern") {
        promptForIntern();
      } else {
        console.log("Your team is complete!");
        console.log(team);
        buildPage(); // build the team
      }
    });
};

const promptForEngineer = () => {
  inquirer
    .prompt([
      //engineer questions
      {
        type: "input",
        message: "What is your engineer's name?",
        name: "name",
        validate: function (input) {
          if (input === "") {
            return "Please enter engineer's name";
          } else if (validator.isNumeric(input)) {
            return "Name must not be a number";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is your engineer's Id?",
        name: "id",
        default: "number",
        validate: function (input) {
          if (input === "" || !validator.isNumeric(input)) {
            return "Please enter numeric value";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is your engineer's email?",
        name: "email",
        default: "foo@bar.com",
        validate: function (input) {
          if (input === "" || !validator.isEmail(input)) {
            return "Please enter valid email";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is your engineer's Github username?",
        name: "github",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      team.push(engineer);

      promptForNextEmployee();
    });
};

const promptForIntern = () => {
  inquirer
    .prompt([
      //intern questions
      {
        type: "input",
        message: "What is your intern's name?",
        name: "name",
        validate: function (input) {
          if (input === "") {
            return "Please enter intern's name";
          } else if (validator.isNumeric(input)) {
            return "Name must not be a number";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is your intern's Id?",
        name: "id",
        default: "number",
        validate: function (input) {
          if (input === "" || !validator.isNumeric(input)) {
            return "Please enter numeric value";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is your intern's email?",
        name: "email",
        default: "foo@bar.com",
        validate: function (input) {
          if (input === "" || !validator.isEmail(input)) {
            return "Please enter valid email";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is your intern's school?",
        name: "school",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      team.push(intern);

      promptForNextEmployee();
    });
};

const buildPage = () => {
  fs.writeFileSync(outputPath, render(team));
};

promptForManager();

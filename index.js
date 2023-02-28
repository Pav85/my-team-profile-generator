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

const promptForManager = () => {
  inquirer // maybe will need to put return
    .prompt([
      //managerquestions
      {
        type: "input",
        message: "What is team manager's name?",
        name: "name",
        validate: function (input) {
          if (input === "") {
            return "Please enter manager's name";
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
            return "Please enter the value";
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
      // populate manager info
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      team.push(manager);
      promptForNextEmployee();
      // console.log("Welcome to the team!!!");
      // console.log(response);
      // console.log(team);
    });
};

const promptForNextEmployee = () => {
  inquirer
    .prompt([
      {
        // choice of 3
        type: "list",
        message: "Please select a type of a team member you would like to add",
        name: "teamMemberType",
        choices: ["Engineer", "Intern", "Finish building this team"],
        default: "Use arrow keys",
      },
    ])
    .then((response) => {
      // if engineer
      //    promptForEngineer
      // else if intern
      //    promptForIntern
      // else
      //    use the functionality from page-template to generate the team
      // generateTeam(team); not sure here yet
      // console.log(response);
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
            return "Please enter the value";
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
      },
      {
        type: "input",
        message: "What is your engineer's Github username?",
        name: "github",
      },
    ])
    .then((response) => {
      // add new engineer to employees array
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      team.push(engineer);
      // console.log(team);
      // console.log(team);
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
      },
      {
        type: "input",
        message: "What is your intern's Id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your intern's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your intern's school?",
        name: "school",
      },
    ])
    .then((response) => {
      // add new intern to employees array
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      team.push(intern);
      // console.log(team);
      promptForNextEmployee();
    });
};

const buildPage = () => {
  console.log(render(team));
  fs.writeFileSync(outputPath, render(team));
  // writeToFile(); // not sure here yet
};

promptForManager();

// buildPage();

// module.exports

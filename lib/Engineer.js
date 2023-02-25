// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// starter and pseudo code  given by Dan M

const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // super(name, id, email, "Engineer"); // mot sure why "Engineer" is here instead of role.
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// starter and pseudo code  given by Dan M

const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, role, github) {
    // super(name, id, email, "Engineer"); // mot sure why "Engineer" is here instead of role.
    super(name, id, email, role, github);
    this.github = github;
    // and other properties
  }
}

// const eng1 = new Engineer("Danish", "danish@gmail.gov", "danisheng");

module.exports = Engineer;

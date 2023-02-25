// TODO: Write code to define and export the Employee class
// class Employee comented out was given by Dan M
// class Employee {
//   constructor(name, email, role) {
//     this.name = name;
//     this.email = email;
//     this.role = role;
//   }
// }

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // methods

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;

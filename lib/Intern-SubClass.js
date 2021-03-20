const Employee = require('./Employee-Class');
const generateHTMLCard = require('./generateHTMLCard-Function')

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool(){
      return this.school
  }
  getRole(){
      return 'Intern'
  }
}

module.exports = Intern;

const test = new Intern ('matt', '01', 'test@gmail.com', 'LA Tech')
console.log(generateHTMLCard(test))
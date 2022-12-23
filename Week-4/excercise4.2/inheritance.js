let Person = function() {};

Person.prototype.initialise = function(name, age) {
    this.age = age;
    this.name = name;
}

function Teacher(name, age) {};

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.teach = function(subject) {
    this.subject = subject;
    return `${this.name} is now teaching ${this.subject}`;
};

const him = new Teacher();

him.initialise("Ridwan", 45);
console.log(him.teach('English'));
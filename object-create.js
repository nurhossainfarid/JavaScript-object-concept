// using object literal 
const students = {
    name: `Nur Hossain Farid`,
    job: `Software Engineering`
}
// object constructor 
const person = new Object();
console.log(person);

// inheritance
const human = Object.create(students);
console.log(human.job);

// class(syntactical sugar)
class People  {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const peopleInfo = new People(`Nur Hossain Farid`, 843);
console.log(peopleInfo);

// function
function myInfo(name) {
    this.name = name;
}
const man = new myInfo(`kader`);
console.log(man);
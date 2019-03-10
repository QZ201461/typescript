"use strict";
var a = 2;
function Person(person) {
    console.log(person.name);
    console.log(person.age);
}
var Student = /** @class */ (function () {
    function Student(firstName, aName, bName) {
        this.firstName = firstName;
        this.aName = aName;
        this.bName = bName;
        this.fullname = firstName + aName + bName;
    }
    return Student;
}());
console.log(new Student('王八', '22', '33'));

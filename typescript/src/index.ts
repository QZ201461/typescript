let age:number = 2

interface Person {
  name: string,
  age: number
}

function Person (person: Person) {
  console.log(person.name)
  console.log(person.age)
}

class Student {
  fullname: string;
  constructor(public firstName: string, public aName: string, public bName: string) {
    this.fullname = firstName + aName + bName
  }
}

console.log(new Student('王八', '22', '33'))
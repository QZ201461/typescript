class Animal {
  age: number
  constructor(age: number) {
    this.age = age
  }
  eat() {
    console.log(`今年${this.age},喜欢吃`)
  }
}

class Dog extends Animal{
  type: string
  constructor(type: string, age: number) {
    super(age)
    this.type = type
  }
}

var dog = new Dog('金毛', 18)

dog.eat()
class Cat {
  readonly name: string = '公交车'
  // type: string
  // 在构造函数中给参数添加了修饰符，就相当于声明了一个属性
  constructor(public type: string) {
    this.type = type
  }
}
let cat = new Cat('橘猫')
cat.name = '444'
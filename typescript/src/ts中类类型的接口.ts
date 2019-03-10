// 约定某些类 必须有那些功能或属性
interface PersonInterface {
  name: string,
  age: number,
  eat(): void
}

class XiaoMing implements PersonInterface{
  name: string = '小明'
  age: number = 20

  eat() {}
}

class XiaoHong implements PersonInterface{
  name: string = '小红'
  age: number = 38

  eat() {}
}
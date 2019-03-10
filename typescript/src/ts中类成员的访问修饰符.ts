// 访问修饰符
// 指的是可以在类的成员前通过添加关键字来设置当前成员的访问权限
// public: 公开的， 默认
// private: 私有的， 只能在当前类中访问
// protected: 受保护的 只能在当前类或子类中进行访问

enum Color{
  red,
  yellow,
  blue,
  green,
  orange
}

class Fruit {
  name: string
  public color: Color
  constructor(name: string) {
    this.name = name
    this.color = Color.red
    this.sayFruitName()
    this.fly()
  }
  private sayFruitName() {
    console.log(this.name)
  }
  protected fly(){
    console.log(999)
  }
}

let apple = new Fruit('apple')
apple.color
apple.sayFruitName() // 私有属性 只能在Fruit类中使用
apple.fly()

class Orange extends Fruit{

  getColor() {
    console.log(this.color)
    this.fly()
  }
}

let navelOrange = new Orange('脐橙')
navelOrange.color
// number 
let a: number = 200
let b: number = NaN
let c: number = Infinity
let d: number = 0xA22
let e: number = 0b101010
let f: number = 0o66

// string
let str1: string = '这是一个字符串'
let str2: string = "这也是一个字符串"
let str3: string = `es6模板字符串${str1}`

// boolean
let flag: boolean = true

// 数组
// Array<数据类型>
let arr: Array<number> = [1, 1, 3] // 只能是数字 

// 元组 (Tuple) 元组类型表示一个已知元素数量和类型的数组，各元素的类型不必相同
let arr2: [number, string] = [10, 'sss']
// arr2[0] = '998' // error 第一个元素类型为Number
arr2[0] = 223

// void 空值
let res1: void = undefined

// undefined
let res2: undefined = undefined

// null
let res3: null = null

// any 表示任意类型
let somevar: any = 2
somevar = '2'
somevar = [22]

// never never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// 一般用于不可能返回内容的函数的返回值类型设置

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// object类型
let obj1: object = {}
let obj2: object = []

// 对象类型
let o: { name: string, age: number } = { name: '小王', age: 38 }

// enum: 枚举类型
// gender: 0 1 -1

enum Gender {
  male = 1,
  famale = 0,
  unknow = -1
}

let gender: Gender = Gender.male
let person = {
  gender: Gender.male
}


// 类型断言
let stri: any = 'abc'
// stri = 3
let len: number = (<string>stri).length
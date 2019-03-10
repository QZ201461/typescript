// 接口 可以理解为一种规范

// 接口使用interface声明
interface AjaxOptions{
  url: string,
  // 给属性加上问号之后 表示为可选属性
  type?: string,
  data?: object,
  success(data: object): void
}

// options中 需要包含url type data success
function ajax(options: AjaxOptions) {

}

ajax({
  url: 'http: //www.baidu.com',
  type: 'POST',
  data: {},
  success(data) {
    console.log(data)
  }
})

// 接口属性只读
interface Point{
  readonly x: number,
  y: number,
  [propName: string]: any // 额外属性检查
}

let point: Point = {
  x: 100,
  y: 200
}
point.x = 600

let point2: Point = {
  x: 50,
  y: 60,
  z: 90
}
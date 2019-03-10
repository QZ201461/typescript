interface SumInterface {
  (a: number, b: number): number
}
// sum函数类型为SumInterface定义的函数类型
let sum: SumInterface = function(a: string, b: number) {
  return a + b
}
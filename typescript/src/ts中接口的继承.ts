// 接口继承接口
interface TwoDPoint{
  x: number,
  y: number
}

/* interface ThreePoint extends TwoDPoint{
  z: number
} */
interface ThreePoint extends TwoDPoint{
  z: number
}

interface FourPoint extends TwoDPoint, ThreePoint{
  time: Date
}

let poi: FourPoint = {
  x: 100,
  y: 300,
  z: 300,
  time: new Date
}

// 接口继承类

class Bird {
  type: string = '蜂鸟'
  fly(): void {

  }
}

interface Fly extends Bird {

}

let flyingBird: Fly = {
  type: '麻雀',
  fly(): void {}
}
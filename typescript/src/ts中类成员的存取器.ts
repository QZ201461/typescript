class People {
  // name: string = ''
  private _name: string = ''
  // 属性的存取器
  get name(): string {
    return this.name
  }
  set name(value: string) {
    // 相关的校验逻辑
    this._name = value
  }
}
 var p = new People()
 p.name = '546546522rf'
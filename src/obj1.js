export default class Obj1 {
  constructor() {
    this._name = "Obj1";
  }
  get name() {
    return this._name;
  }
  static get oneThird() {
    return 1.0 / 3.0;
  }
}

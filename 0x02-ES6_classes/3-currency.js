export default class HolbertonCourse {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  getCode() {
    return this._code;
  }

  setCode(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw TypeError('Code must be a string');
    }
  }

  getName() {
    return this._name;
  }

  setName(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

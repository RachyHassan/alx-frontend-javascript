export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'name');
    this._length = this._validateNumber(length, 'length');
    this._students = this._validateArray(students, 'students');
  }

  // name getter
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this._validateString(value, 'name');
  }

  // length getter and setter
  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this._validateNumber(value, 'length');
  }

  // student getter and setter
  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this._validateString(value, 'students');
  }

  // validate string
  _validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  // Validate number
  _validateNumber(value, attribute) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  // Validate array
  _validateArray(value, attribute) {
    if (!Array.isArray(value)) {
      throw TypeError(`${attribute} must be an array`);
    }
    return value;
  }
}

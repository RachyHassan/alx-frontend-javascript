export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // name getter
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

  // length getter and setter
  getLength() {
    return this._length;
  }

  setLength(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError('length must be a number');
    }
  }

  // student getter and setter
  getStudents() {
    return this._students;
  }

  setStudents(students) {
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw TypeError('Students must be an array');
    }
  }
}

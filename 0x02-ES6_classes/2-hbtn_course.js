class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = Array.isArray(students) ? students : [];

    if (typeof this._name !== 'string') {
      throw new TypeError('name must be a string');
    }

    if (typeof this._length !== 'number') {
      throw new TypeError('length must be a number');
    }

    if (!Array.isArray(this._students)) {
      throw new TypeError('students must be an array');
    }

    this.get name() {
      return this._name;
    }

    this.set name(value) {
      if (typeof value !== 'string') {
        throw new TypeError('name must be a string');
      }

      this._name = value;
    }

    this.get length() {
      return this._length;
    }

    this.set length(value) {
      if (typeof value !== 'number') {
        throw new TypeError('length must be a number');
      }

      this._length = value;
    }

    this.get students() {
      return this._students;
    }

    this.set students(value) {
      if (!Array.isArray(value)) {
        throw new TypeError('students must be an array');
      }

      this._students = value;
    }
  }
}

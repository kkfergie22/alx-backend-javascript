/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(newRange) {
    if (typeof newRange !== 'string') {
      throw new TypeError('Range must be a string');
    }
    this._range = newRange;
  }

  cloneCar() {
    return new Car();
  }
}

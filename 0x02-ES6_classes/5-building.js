const error = 'Class extending Building must override evacuationWarningMessage';

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw Error(error);
  }
}

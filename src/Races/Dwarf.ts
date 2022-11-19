import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80; 
  static createdInstances = 0; 

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number { 
    this.createdInstances += 1;
    return this.createdInstances; 
  } 
}

export default Dwarf;
import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number { 
    this._createdInstances += 1;
    return this._createdInstances; 
  }
}

export default Mage;

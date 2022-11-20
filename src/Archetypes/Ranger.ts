import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    this._createdInstances += 1;
    return this._createdInstances;
  }
}

export default Ranger;

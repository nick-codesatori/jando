import RPGCalcs from '../static/RPGCalcs';

export class RPGCharacter {
    Strength_Base: number;
    Strength_Mods: number[];
    get Strength(): number {
        return +this.Strength_Base + this.Strength_Mods.reduce(RPGCalcs.add, 0);
    }
}

import { RPGCalcs } from '../static/RPGCalcs';
import { Abilities } from '../static/RPGConstants';

export class AbilityScore {
    public readonly Name: string;
    Base: number;
    Mods: number[];
    get Total(): number {
        return +this.Base + this.Mods.reduce(RPGCalcs.add, 0);
    }
    constructor(name: string, base: number) {
        this.Name = name;
        this.Base = base;
        this.Mods = [2, 1]; // hardcoded for testing
    }
}

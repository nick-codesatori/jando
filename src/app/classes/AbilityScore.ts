import RPGCalcs from '../static/RPGCalcs';

export class AbilityScore {
    Base: number;
    Mods: number[];
    get Total(): number {
        return +this.Base + this.Mods.reduce(RPGCalcs.add, 0);
    }
}

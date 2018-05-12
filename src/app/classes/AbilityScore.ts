import { RPGCalcs } from '../static/RPGCalcs';

export class AbilityScore {
    Name: string;
    Base: number;
    Mods: number[];
    get Total(): number {
        return +this.Base + this.Mods.reduce(RPGCalcs.add, 0);
    }
}

export const Abilities = {
    Strength: 'Strength'
};

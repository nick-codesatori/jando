import { AbilityScore } from './AbilityScore';
import { Abilities } from './AbilityScore';

export class RPGCharacter {
    Strength: AbilityScore;

    constructor() {
        this.Strength = new AbilityScore();
        this.Strength.Name = Abilities.Strength;
    }
}

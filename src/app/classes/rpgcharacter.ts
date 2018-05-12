import { AbilityScore } from './AbilityScore';
import { Abilities } from '../static/RPGConstants';

export class RPGCharacter {
    AbilityScores: AbilityScore[];
    constructor(stats: number[]) {
        this.AbilityScores = [
            new AbilityScore(Abilities.Strength, stats[0]),
            new AbilityScore(Abilities.Dexterity, stats[1]),
            new AbilityScore(Abilities.Constitution, stats[2]),
            new AbilityScore(Abilities.Intelligence, stats[3]),
            new AbilityScore(Abilities.Wisdom, stats[4]),
            new AbilityScore(Abilities.Charisma, stats[5])
        ];
    }
}

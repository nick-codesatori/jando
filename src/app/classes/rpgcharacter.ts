import RPGCalcs from '../default/RPGCalcs';
import { AbilityScore } from './AbilityScore';

export class RPGCharacter {
    Strength: AbilityScore;

    constructor() {
        this.Strength = new AbilityScore();
    }
}

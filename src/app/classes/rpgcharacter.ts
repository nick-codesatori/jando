export class Rpgcharacter {
    Strength_Base: number;
    Strength_Mods: number[];
    get Strength(): number {
        return +this.Strength_Base + this.Strength_Mods.reduce(this.add, 0);
    }
    add(a, b) {
        return a + b;
    }
}

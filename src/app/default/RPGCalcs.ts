export default class RPGCalcs {
    static add(a, b) {
        return a + b;
    }
    static mod(a) {
        if (a > 0) {
            return Math.floor((a - 10) / 2);
        } else {
            return Math.ceil((a - 10) / 2);
        }
    }
}

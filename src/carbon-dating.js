const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(a) {
    if (
        typeof a == "number" ||
        Array.isArray(a) ||
        typeof a == "object" ||
        !arguments[0] ||
        typeof +a == "string" ||
        /^[a-z]/i.test(a)
    ) {
        return false;
    } else {
        let b = parseFloat(a);
        if (b <= 0 || typeof b !== "number" || b > MODERN_ACTIVITY) {
            return false;
        } else {
            return Math.ceil(
                Math.log(MODERN_ACTIVITY / b) / (0.693 / HALF_LIFE_PERIOD)
            );
        }
    }
};

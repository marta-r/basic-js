const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(a) {
    let b = parseFloat(a);
    if (Array.isArray(a) || !arguments[0] || typeof a === "number" || isNaN(b) || b <= 0 || b > MODERN_ACTIVITY) return false;
    return Math.ceil(Math.log(MODERN_ACTIVITY / b) / (0.693 / HALF_LIFE_PERIOD));
};

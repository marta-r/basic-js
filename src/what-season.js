module.exports = function getSeason(a) {
    let winter = [11, 0, 1];
    let spring = [2, 3, 4];
    let summer = [5, 6, 7];
    let autumn = [8, 9, 10];
    if (!arguments[0]) return "Unable to determine the time of year!";
    if (!(a instanceof Date) || isNaN(a.valueOf())) throw "error";

    let month = a.getMonth();

    if (winter.includes(month)) {
        return "winter";
    }
    if (spring.includes(month)) {
        return "spring";
    }
    if (summer.includes(month)) {
        return "summer";
    }
    if (autumn.includes(month)) {
        return "autumn";
    }
};

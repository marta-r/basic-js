module.exports = function repeater(str, options) {
    let arr = [];
    let arrAdditional = [];

    for (let key in options) {
        if(options[key] !== undefined)
        options[key] = String(options[key]);
    }

    if (options.repeatTimes) {
        for (let i = 0; i < options.repeatTimes; i++) {
            arr.push(str);
        }
    } else arr.push(str);

    if (options.addition) {
        if (options.additionRepeatTimes) {
            for (let i = 0; i < options.additionRepeatTimes; i++) {
                arrAdditional.push(options.addition);
            }
        } else arrAdditional.push(options.addition);

        if (options.additionSeparator) {
            for (let i = 0; i < arrAdditional.length - 1; i++) {
                arrAdditional.splice(
                    i,
                    1,
                    arrAdditional[i] + options.additionSeparator
                );
            }
        } else {
            for (let i = 0; i < arrAdditional.length - 1; i++) {
                arrAdditional.splice(i, 1, arrAdditional[i] + "|");
            }
        }

        for (let i = 0; i < arr.length; i++) {
            arr.splice(i, 1, arr[i] + arrAdditional.join(""));
        }
    }

    if (options.separator) {
        for (let i = 0; i < arr.length - 1; i++) {
            arr.splice(i, 1, arr[i] + options.separator);
        }
    } else {
        for (let i = 0; i < arr.length - 1; i++) {
            arr.splice(i, 1, arr[i] + "+");
        }
    }

    return arr.join("");
}

module.exports = function transform(arr) {
    let arr2 = [];
    if (!Array.isArray(arr)) {
        throw "error";
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "--discard-next") {
            i++;
            continue;
        }
        if (arr[i] === "--discard-prev") {
            arr2.pop();
            continue;
        }
        if (arr[i] === "--double-next") {
            if (i === arr.length - 1) continue;
            arr2.splice(i, 0, arr[i + 1]);
            continue;
        }
        if (arr[i] === "--double-prev") {
            if (i === 0) continue;
            arr2.splice(i - 1, 0, arr[i - 1]);
            continue;
        } else arr2.push(arr[i]);
    }

    return arr2;
}

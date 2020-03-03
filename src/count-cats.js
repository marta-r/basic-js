module.exports = function countCats(a) {
  let cats = [];

    for (let i = 0; i < a.length; i++) {
        let tempcats = a[i].filter(item => item == "^^");
        cats.push(tempcats.length);
    }

    return cats.reduce((sum, current) => sum + current, 0);
};

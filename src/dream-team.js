module.exports = function createDreamTeam(a) {
    if (Array.isArray(a)) {
        
        let newArr = a.map(function(item) {
            if (typeof item == "string") {
                return item;
            } else return "0";
        });

        let newArr2 = newArr.map(item => (item = item.replace(/\s/g, "")));

        let newArr3 = newArr2.map(function(item) {
            if (/^[a-z]/i.test(item)) {
                return item[0].toUpperCase();
            } else return "";
        });

        newArr3.sort();

        return newArr3.reduce((sum, current) => sum + current, "");

    } else return false;
};
